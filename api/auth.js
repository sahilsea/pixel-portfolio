// POST /api/auth (x-admin-password) -> { ok: true } or 401
import { json, checkAuth } from './_lib.js';

export async function POST(request) {
  return (await checkAuth(request)) || json({ ok: true });
}
