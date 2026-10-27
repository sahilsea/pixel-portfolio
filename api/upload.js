// POST /api/upload?challenge=id&date=…  (x-admin-password) body: image bytes -> { url }
import { put } from '@vercel/blob';
import { ID_RE, DATE_RE, json, checkAuth } from './_lib.js';

const TYPES = { 'image/webp': 'webp', 'image/jpeg': 'jpg', 'image/png': 'png' };
const MAX = 4 * 1024 * 1024; // Vercel functions accept up to 4.5 MB; the page shrinks images first

export async function POST(request) {
  const denied = await checkAuth(request);
  if (denied) return denied;
  const q = new URL(request.url).searchParams;
  const challenge = q.get('challenge') || '', date = q.get('date') || '';
  if (!ID_RE.test(challenge) || !DATE_RE.test(date)) return json({ error: 'Bad challenge or date' }, 400);
  const type = (request.headers.get('content-type') || '').split(';')[0];
  const ext = TYPES[type];
  if (!ext) return json({ error: 'Only WebP, JPEG or PNG images' }, 415);
  const buf = Buffer.from(await request.arrayBuffer());
  if (!buf.length || buf.length > MAX) return json({ error: 'Image must be under 4 MB' }, 413);
  const blob = await put(`shots/${challenge}/${date}/shot.${ext}`, buf, {
    access: 'public', addRandomSuffix: true, contentType: type
  });
  return json({ url: blob.url });
}
