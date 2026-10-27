// Shared helpers for the challenge log API. Files starting with "_" are not routes on Vercel.
import { createHash, timingSafeEqual } from 'node:crypto';
import { list } from '@vercel/blob';

export const ID_RE = /^[a-z0-9-]{1,40}$/;
export const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers }
  });
}

const digest = s => createHash('sha256').update(String(s)).digest();

// The password lives only in the ADMIN_PASSWORD env var on Vercel.
export async function checkAuth(request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return json({ error: 'ADMIN_PASSWORD is not set on the server' }, 500);
  const given = request.headers.get('x-admin-password') || '';
  if (given && timingSafeEqual(digest(given), digest(expected))) return null;
  await new Promise(r => setTimeout(r, 600)); // slow down guessing
  return json({ error: 'Wrong password' }, 401);
}

// Each save writes a new blob with a random suffix, so its URL is never stale in the CDN.
// The newest blob per date wins; older ones are deleted after a save.
export async function listDayBlobs(challenge, date = '') {
  const prefix = `log/${challenge}/${date}`;
  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix, cursor, limit: 1000 });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  const latest = new Map();
  for (const b of blobs) {
    const day = b.pathname.slice(prefix.length - date.length).slice(0, 10);
    if (!DATE_RE.test(day)) continue;
    const cur = latest.get(day);
    if (!cur || new Date(b.uploadedAt) > new Date(cur.uploadedAt)) latest.set(day, b);
  }
  return { all: blobs, latest };
}

export async function readEntry(blob) {
  const res = await fetch(blob.url);
  return res.ok ? res.json() : null;
}

const isHttp = u => { try { return ['http:', 'https:'].includes(new URL(u).protocol); } catch { return false; } };
const isBlobUrl = u => { try { return new URL(u).hostname.endsWith('.blob.vercel-storage.com'); } catch { return false; } };

// Keep only the shapes the page knows how to show.
export function cleanEntry(body, date) {
  const fields = {};
  const src = body && typeof body.fields === 'object' && body.fields ? body.fields : {};
  for (const [id, f] of Object.entries(src).slice(0, 30)) {
    if (!ID_RE.test(id) || !f || typeof f !== 'object') continue;
    const out = { done: !!f.done };
    if (typeof f.value === 'string') {
      const v = f.value.trim().slice(0, 4000);
      if (f.kind === 'link') { if (v && isHttp(v)) out.value = v; }
      else if (v) out.value = v;
    } else if (Array.isArray(f.value)) {
      out.value = f.value.filter(u => typeof u === 'string' && isBlobUrl(u)).slice(0, 12);
    }
    if (f.kind) out.kind = String(f.kind).slice(0, 10);
    fields[id] = out;
  }
  return { date, fields, savedAt: new Date().toISOString() };
}
