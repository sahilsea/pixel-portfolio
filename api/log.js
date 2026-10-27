// GET  /api/log?challenge=id        -> { entries: { "YYYY-MM-DD": entry } }
// POST /api/log?challenge=id&date=…  (x-admin-password) body { fields } -> { entry }
import { put, del } from '@vercel/blob';
import { ID_RE, DATE_RE, json, checkAuth, listDayBlobs, readEntry, cleanEntry } from './_lib.js';

export async function GET(request) {
  const challenge = new URL(request.url).searchParams.get('challenge') || '';
  if (!ID_RE.test(challenge)) return json({ error: 'Bad challenge id' }, 400);
  const { latest } = await listDayBlobs(challenge);
  const entries = {};
  await Promise.all([...latest].map(async ([day, blob]) => {
    const e = await readEntry(blob).catch(() => null);
    if (e) entries[day] = e;
  }));
  return json({ entries }, 200, { 'cache-control': 'public, max-age=0, s-maxage=15, stale-while-revalidate=60' });
}

export async function POST(request) {
  const denied = await checkAuth(request);
  if (denied) return denied;
  const q = new URL(request.url).searchParams;
  const challenge = q.get('challenge') || '', date = q.get('date') || '';
  if (!ID_RE.test(challenge) || !DATE_RE.test(date)) return json({ error: 'Bad challenge or date' }, 400);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Body must be JSON' }, 400); }
  const entry = cleanEntry(body, date);

  const before = await listDayBlobs(challenge, date);
  const prev = before.latest.get(date);
  const prevEntry = prev ? await readEntry(prev).catch(() => null) : null;

  const saved = await put(`log/${challenge}/${date}.json`, JSON.stringify(entry), {
    access: 'public', addRandomSuffix: true, contentType: 'application/json'
  });

  // Drop older versions of this day, and screenshots that were removed from it.
  const keep = new Set(Object.values(entry.fields).flatMap(f => Array.isArray(f.value) ? f.value : []));
  const dropShots = prevEntry ? Object.values(prevEntry.fields || {})
    .flatMap(f => Array.isArray(f.value) ? f.value : []).filter(u => !keep.has(u)) : [];
  const stale = before.all.map(b => b.url).filter(u => u !== saved.url);
  if (stale.length || dropShots.length) await del([...stale, ...dropShots]).catch(() => {});

  return json({ entry });
}
