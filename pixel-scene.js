(function () {
  if (customElements.get('pixel-scene')) return;
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const bay = (x, y) => BAYER[(y & 3) * 4 + (x & 3)] / 16;
  function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const cache = {};
  const C = h => cache[h] || (cache[h] = [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]);
  function makeNoise(R) { const v = []; for (let i = 0; i < 256; i++) v.push(R()); return x => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return v[i & 255] * (1 - u) + v[(i + 1) & 255] * u; }; }
  function Buf(W, H) {
    const img = new ImageData(W, H), d = img.data;
    return { img, W, H, set(x, y, c) { x |= 0; y |= 0; if (x < 0 || y < 0 || x >= W || y >= H) return; const i = (y * W + x) * 4; d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 255; } };
  }
  function toCanvas(b) { const c = document.createElement('canvas'); c.width = b.W; c.height = b.H; c.getContext('2d').putImageData(b.img, 0, 0); return c; }

  const PAL = {
    day: { sky: ['#0C5FB8', '#1E88E5', '#2CA4EC', '#56C8F0', '#A8EAF6'], cloud: ['#FFFFFF', '#E6F2FF', '#B4D2EC'], mtn: ['#A4C6EC', '#7FAADD'], hills: ['#8ACB52', '#62B436', '#469A26', '#2F7A1A'], hl: ['#C8F08A', '#A6E466', '#86D24A', '#6CC13A'], tree: ['#1F5A14', '#2F7A1A', '#4FA52A'], trunk: '#5A3A1E', grass: ['#2C6B0C', '#3F9410', '#5DB915', '#8FDB22'], flower: ['#FFFFFF', '#FF9AC8', '#FFE05C'], wall: '#FFF4CC', wallShade: '#E0CFA0', roofs: [['#E83A30', '#9E1F18'], ['#22B0FF', '#0A5A99'], ['#F07A3C', '#7A2C14'], ['#9366FF', '#4A1FB8']], win: '#0C2A52', stone: ['#DADDEA', '#9AA0BC'], smoke: '#EEF0F7', bird: '#1B2147', particle: 'petal' },
    dusk: { sky: ['#22318F', '#4A3FA8', '#8A5FB8', '#C08BC4', '#F2A98C', '#FFD2A0'], cloud: ['#FFE2C8', '#F2B0A0', '#B87BA8'], mtn: ['#A87BB8', '#8458A0'], hills: ['#7A6A60', '#5A5A50', '#3F4A40', '#2A3530'], hl: ['#D8A878', '#B08A68', '#8A7A5A', '#6A6A50'], tree: ['#1C2622', '#2A3A32', '#4A5040'], trunk: '#2A1E18', grass: ['#1C2622', '#2A3A32', '#4A5040', '#8A7A5A'], flower: ['#FFD2A0', '#FF9AC8', '#FFE05C'], wall: '#F2C7B0', wallShade: '#C08B8B', roofs: [['#A3155A', '#4A0A2A'], ['#4A1FB8', '#1F0B57'], ['#C9502A', '#7A2C14'], ['#0A5A99', '#0C2A52']], win: '#FFD21F', stone: ['#B8A0B8', '#7A6090'], smoke: '#F2C7B0', bird: '#2A1E3A', particle: 'leaf' },
    night: { sky: ['#020414', '#080B22', '#0D1130', '#141939', '#1B2147', '#262D57'], cloud: ['#3A426F', '#2A3160', '#1B2147'], mtn: ['#1B2147', '#161B40'], hills: ['#16324A', '#10283A', '#0C1F2E', '#08151F'], hl: ['#2E5878', '#224660', '#1A3850', '#12303F'], tree: ['#050E14', '#0A1A24', '#15343F'], trunk: '#050E14', grass: ['#050E14', '#0A1A24', '#12303C', '#1E4058'], flower: ['#BDE8FF', '#C2A6FF', '#FFE05C'], wall: '#3A426F', wallShade: '#262D57', roofs: [['#262D57', '#141939'], ['#3A426F', '#1B2147'], ['#4A1FB8', '#1F0B57'], ['#0A5A99', '#0C2A52']], win: '#FFD21F', stone: ['#565E8A', '#3A426F'], smoke: '#565E8A', bird: '#000000', particle: 'firefly' }
  };
  const PRESETS = {
    meadow: { pal: 'day', house: true, trees: 12, clouds: 6, birds: true, seed: 7, low: true },
    dusk: { pal: 'dusk', house: true, trees: 12, clouds: 6, birds: true, seed: 7, low: true },
    night: { pal: 'night', house: true, trees: 12, clouds: 4, stars: true, seed: 7, low: true },
    village: { pal: 'day', village: true, trees: 7, clouds: 4, birds: true, seed: 21 },
    tower: { pal: 'night', tower: true, trees: 7, clouds: 3, stars: true, seed: 5 },
    train: { pal: 'dusk', train: true, trees: 8, clouds: 4, birds: true, seed: 13 },
    fireflies: { pal: 'night', house: true, trees: 14, clouds: 2, stars: true, seed: 31, houseAt: 0.7 },
    dayend: { pal: 'day', house: true, trees: 14, clouds: 4, birds: true, seed: 31, houseAt: 0.7, low: true },
    duskend: { pal: 'dusk', house: true, trees: 14, clouds: 4, birds: true, seed: 31, houseAt: 0.7, low: true }
  };

  function drawHouse(b, x0, base, u, roof, pal) {
    const w = 12 * u, h = 8 * u, oh = 2 * u, rh = 5 * u;
    for (let y = base - h; y < base; y++) for (let x = x0; x < x0 + w; x++) b.set(x, y, C(x >= x0 + w * 0.72 ? pal.wallShade : pal.wall));
    const dx = x0 + Math.round(w * 0.2);
    for (let y = base - 4 * u; y < base; y++) for (let x = dx; x < dx + 2 * u; x++) b.set(x, y, C(pal.trunk));
    const wx = x0 + Math.round(w * 0.5), wy = base - h + 2 * u;
    for (let y = wy; y < wy + 3 * u; y++) for (let x = wx; x < wx + 3 * u; x++) b.set(x, y, C(pal.win));
    const top = base - h - rh, cx = x0 + w / 2;
    const chx = x0 + Math.round(w * 0.68), chTop = top - 2 * u;
    for (let y = chTop; y < top + u; y++) for (let x = chx; x < chx + 2 * u; x++) b.set(x, y, C(x < chx + u ? pal.stone[0] : pal.stone[1]));
    for (let i = 0; i < rh; i++) {
      const y = top + i, hw = w * 0.3 + (w / 2 + oh - w * 0.3) * (i + 1) / rh;
      for (let x = Math.round(cx - hw); x < Math.round(cx + hw); x++) {
        const shingle = (i % (2 * u) === 2 * u - 1) && ((x >> 1) & 1);
        b.set(x, y, C(i >= rh - u || shingle ? roof[1] : roof[0]));
      }
    }
    return { x: chx + u, y: chTop - 1 };
  }
  function drawTower(b, cx, base, u, pal) {
    const w = 7 * u, h = 26 * u, x0 = Math.round(cx - w / 2), top = base - h;
    for (let y = top; y < base; y++) for (let x = x0; x < x0 + w; x++) {
      let c = x < x0 + w * 0.6 ? pal.stone[0] : pal.stone[1];
      const row = Math.floor((y - top) / (3 * u));
      if ((y - top) % (3 * u) === 0 || ((x - x0 + (row & 1) * 2 * u) % (4 * u) === 0 && x < x0 + w * 0.6)) c = pal.stone[1];
      b.set(x, y, C(c));
    }
    for (let y = top - 3 * u; y < top; y++) for (let x = x0 - u; x < x0 + w + u; x++) {
      if (y < top - u && Math.floor((x - x0 + u) / (2 * u)) % 2 === 1) continue;
      b.set(x, y, C(x < x0 + w * 0.6 ? pal.stone[0] : pal.stone[1]));
    }
    const wx = Math.round(cx - u), wy = top + 3 * u;
    for (let y = wy; y < wy + 3 * u; y++) for (let x = wx; x < wx + 2 * u; x++) b.set(x, y, C(pal.win));
    const wy2 = top + 13 * u;
    for (let y = wy2; y < wy2 + 3 * u; y++) for (let x = wx; x < wx + 2 * u; x++) b.set(x, y, C(pal.win));
    return { x: cx, y: wy + 1.5 * u };
  }
  function drawTree(b, x, base, r, pop, pal) {
    const th = Math.max(1, Math.round(r * 0.7)), tw = Math.max(1, Math.round(r * 0.3));
    for (let y = base - th; y <= base; y++) for (let xx = Math.round(x - tw / 2); xx < Math.round(x - tw / 2) + tw; xx++) b.set(xx, y, C(pal.trunk));
    const ry0 = pop ? r * 1.5 : r, cy = base - th - (pop ? r * 1.2 : r * 0.7);
    const blobs = pop ? [[0, 0, r * 0.55, r * 1.5]] : [[0, 0, r, r], [-r * 0.65, r * 0.3, r * 0.7, r * 0.7], [r * 0.6, r * 0.35, r * 0.65, r * 0.65]];
    for (let py = Math.floor(cy - ry0 - 1); py <= base - th + 1; py++) for (let px = Math.floor(x - r * 1.5); px <= x + r * 1.5; px++) {
      let inside = false;
      for (const bl of blobs) { const a = (px - (x + bl[0])) / bl[2], c = (py - (cy + bl[1])) / bl[3]; if (a * a + c * c <= 1) { inside = true; break; } }
      if (!inside) continue;
      const l = -(((px - x) / r) * 0.5 + ((py - cy) / ry0) * 0.85) + (bay(px, py) - 0.5) * 0.45;
      b.set(px, py, C(l > 0.3 ? pal.tree[2] : l > -0.3 ? pal.tree[1] : pal.tree[0]));
    }
  }
  function makeCloud(R, cw, ch, cols) {
    const b = Buf(cw, ch), puffs = [], n = 4 + (R() * 4 | 0);
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n, dome = Math.sin(Math.PI * t);
      const r = Math.min(ch * 0.48, ch * (0.22 + 0.3 * dome) * (0.8 + R() * 0.4));
      puffs.push([cw * (0.1 + 0.8 * t) + (R() - 0.5) * cw * 0.06, ch * 0.92 - r * 0.85, r]);
    }
    for (let y = 0; y < ch - 1; y++) for (let x = 0; x < cw; x++) {
      let best = -9;
      for (const p of puffs) { const dx = x - p[0], dy = y - p[1]; if (dx * dx + dy * dy <= p[2] * p[2]) best = Math.max(best, -(dy / p[2]) * 0.85 - (dx / p[2]) * 0.25); }
      if (best === -9) continue;
      let l = best + (bay(x, y) - 0.5) * 0.4; if (y > ch * 0.8) l -= 0.5;
      b.set(x, y, C(l > 0.2 ? cols[0] : l > -0.3 ? cols[1] : cols[2]));
    }
    return toCanvas(b);
  }

  class PixelScene extends HTMLElement {
    static get observedAttributes() { return ['preset', 'px', 'motion']; }
    connectedCallback() {
      Object.assign(this.style, { display: 'block', position: 'relative', width: '100%', height: '100%', overflow: 'hidden' });
      if (!this.cv) {
        this.cv = document.createElement('canvas');
        Object.assign(this.cv.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block', imageRendering: 'pixelated', objectFit: 'cover' });
        this.cv.setAttribute('aria-hidden', 'true');
        this.appendChild(this.cv);
      }
      this.ro = new ResizeObserver(() => this.schedule()); this.ro.observe(this);
      this.io = new IntersectionObserver(e => { this.visible = e[e.length - 1].isIntersecting; if (this.visible) this.loop(); }); this.io.observe(this);
      this.schedule();
    }
    disconnectedCallback() { this.ro && this.ro.disconnect(); this.io && this.io.disconnect(); cancelAnimationFrame(this.raf); this.raf = 0; }
    attributeChangedCallback() { if (this.cv) this.schedule(); }
    schedule() { clearTimeout(this.tm); this.tm = setTimeout(() => this.build(), 50); }
    get motionOn() { const m = this.getAttribute('motion'); return m !== 'off' && m !== 'false' && !matchMedia('(prefers-reduced-motion: reduce)').matches; }
    loop() {
      if (this.raf || !this.visible || !this.motionOn || !this.s) return;
      let last = performance.now(), acc = 1;
      const step = now => {
        this.raf = 0;
        if (!this.visible || !this.motionOn) return;
        const dt = Math.min(0.1, (now - last) / 1000); last = now;
        this.t = (this.t || 0) + dt; acc += dt;
        if (acc >= 1 / 15) { acc = 0; this.draw(this.t); }
        this.raf = requestAnimationFrame(step);
      };
      this.raf = requestAnimationFrame(step);
    }
    build() {
      const rect = this.getBoundingClientRect();
      if (rect.width < 4 || rect.height < 4) return;
      const px = +this.getAttribute('px') || 4;
      const W = Math.max(48, Math.ceil(rect.width / px)), H = Math.max(32, Math.ceil(rect.height / px));
      const cfg = PRESETS[this.getAttribute('preset')] || PRESETS.meadow, pal = PAL[cfg.pal];
      const R = rng(cfg.seed * 7919), noise = makeNoise(R);
      this.cv.width = W; this.cv.height = H; this.ctx = this.cv.getContext('2d');
      const u = Math.max(1, Math.round(H / 100));
      const s = { W, H, pal, u };

      // sky
      const sky = Buf(W, H), sk = pal.sky.map(C), n = sk.length, hz = H * 0.66;
      for (let y = 0; y < H; y++) {
        const f = Math.min(n - 1 - 1e-6, (y / hz) * (n - 1)), i = f | 0, fr = f - i;
        for (let x = 0; x < W; x++) sky.set(x, y, fr > bay(x, y) ? sk[i + 1] : sk[i]);
      }
      if (cfg.pal === 'night') {
        const mx = W * 0.8, my = H * 0.16, mr = Math.max(4, H * 0.05);
        for (let y = my - mr; y <= my + mr; y++) for (let x = mx - mr; x <= mx + mr; x++) {
          const a = (x - mx) ** 2 + (y - my) ** 2, b2 = (x - mx - mr * 0.55) ** 2 + (y - my + mr * 0.25) ** 2;
          if (a <= mr * mr && b2 > mr * mr * 0.8) sky.set(x, y, C('#FFF4CC'));
        }
      } else if (cfg.pal === 'dusk') {
        const sx = W * 0.7, sy = H * 0.5, sr = Math.max(6, H * 0.1);
        for (let y = sy - sr; y <= sy + sr; y++) for (let x = sx - sr; x <= sx + sr; x++) {
          if ((x - sx) ** 2 + (y - sy) ** 2 > sr * sr) continue;
          const k = (y - (sy - sr * 0.1)); if (k > 0 && Math.floor(k / Math.max(2, u * 2)) % 2 === 1) continue;
          sky.set(x, y, C(y < sy - sr * 0.4 ? '#FFE05C' : '#FFB86B'));
        }
      }
      s.sky = toCanvas(sky);
      if (cfg.stars) {
        s.stars = []; const ns = Math.round(W * H * 0.55 / 260);
        for (let i = 0; i < ns; i++) s.stars.push({ x: R() * W | 0, y: R() * H * 0.55 | 0, ph: R() * 6.28, sp: 0.8 + R() * 2.2, big: R() < 0.1 });
      }
      // clouds
      s.clouds = [];
      for (let i = 0; i < cfg.clouds; i++) {
        const cw = Math.round(Math.min(150, Math.max(28, W * (0.16 + R() * 0.16)))), ch = Math.round(Math.min(H * (cfg.low ? 0.13 : 0.22), cw * 0.5));
        const cb = cfg.low ? 0.56 + R() * 0.04 : 0.5 + R() * 0.09;
        s.clouds.push({ img: makeCloud(R, cw, ch, pal.cloud), w: cw, x: (i / cfg.clouds) * (W + cw) + R() * 20, y: Math.round(H * cb) - ch, v: 0.8 + R() * 1.6 });
      }
      // land
      const land = Buf(W, H);
      [[0.5, pal.mtn[0], cfg.low ? 0.09 : 0.16, 3], [0.56, pal.mtn[1], cfg.low ? 0.06 : 0.1, 6]].forEach(([base, col, amp, fq], k) => {
        const off = R() * 50;
        for (let x = 0; x < W; x++) {
          const top = Math.round(H * base - (noise(x / W * fq + off) * amp + noise(x / W * fq * 3 + off) * amp * 0.25) * H);
          for (let y = top; y < H; y++) land.set(x, y, C(col));
        }
      });
      const bases = [0.6, 0.68, 0.77, 0.89], amps = [0.035, 0.045, 0.04, 0.03];
      const layer = bases.map((bb, k) => { const f1 = (1.2 + R() * 1.6) * Math.PI * 2 / W, p1 = R() * 6.28, f2 = (3 + R() * 3) * Math.PI * 2 / W, p2 = R() * 6.28; return x => Math.round(H * bb + Math.sin(x * f1 + p1) * H * amps[k] + Math.sin(x * f2 + p2) * H * amps[k] * 0.35); });
      const drawLayer = k => {
        for (let x = 0; x < W; x++) {
          const top = layer[k](x);
          for (let y = top; y < H; y++) {
            const d = y - top; let c = pal.hills[k];
            if (d === 0 || (d < 3 * u && bay(x, y) > 0.35 + d * 0.15)) c = pal.hl[k];
            else if (bay(x * 3 + k, y * 5) > 0.97) c = pal.hl[k];
            land.set(x, y, C(c));
          }
        }
      };
      const placements = [];
      if (cfg.house) placements.push({ x: W * (cfg.houseAt || 0.26), w: 16 * u });
      if (cfg.tower) placements.push({ x: W * 0.68, w: 12 * u });
      if (cfg.village) [0.12, 0.3, 0.56, 0.76].forEach(f => placements.push({ x: W * f, w: 14 * u }));
      const trees = [];
      for (let i = 0; i < cfg.trees; i++) {
        const q = R(), k = q < 0.4 ? 0 : q < 0.75 ? 1 : 2, x = R() * W;
        if (k === 2 && placements.some(p => Math.abs(p.x - x) < p.w)) continue;
        trees.push({ k, x, r: H * [0.013, 0.024, 0.038][k] * (0.8 + R() * 0.5), pop: R() < 0.3 });
      }
      for (let k = 0; k < 3; k++) {
        drawLayer(k);
        trees.filter(t => t.k === k).forEach(t => drawTree(land, t.x, layer[k](Math.round(t.x)) + 1, Math.max(1.5, t.r), t.pop, pal));
      }
      const groundAt = (x0, w) => { let m = 0; for (let x = x0; x < x0 + w; x++) m = Math.max(m, layer[2](x)); return m + 1; };
      if (cfg.house) { const x0 = Math.round(W * (cfg.houseAt || 0.26)); s.chimney = drawHouse(land, x0, groundAt(x0, 12 * u), u, pal.roofs[0], pal); }
      if (cfg.village) [0.12, 0.3, 0.56, 0.76].forEach((f, i) => { const x0 = Math.round(W * f); const c = drawHouse(land, x0, groundAt(x0, 12 * u), u, pal.roofs[i % 4], pal); if (i === 1) s.chimney = c; });
      if (cfg.tower) { const cx = Math.round(W * 0.68); s.beacon = drawTower(land, cx, groundAt(cx - 4 * u, 8 * u) - 1, u, pal); }
      if (cfg.train) {
        const ty = Math.round(H * 0.79);
        for (let x = 0; x < W; x++) for (let y = ty; y < H; y++) {
          const d = y - ty;
          land.set(x, y, C(d === 0 ? pal.stone[0] : d <= u ? (x % (3 * u) === 0 ? pal.stone[1] : pal.trunk) : (d === u + 1 ? pal.hl[2] : pal.hills[2])));
        }
        s.train = { y: ty, u, v: 14 };
      }
      drawLayer(3);
      s.land = toCanvas(land);
      // grass
      s.blades = [];
      const gh = Math.max(3, H * 0.075);
      for (let x = 0; x < W; x++) { const h = Math.round(1 + R() * gh * (0.5 + 0.5 * noise(x / 6 + 9))); s.blades.push({ x, h, fl: R() < 0.05 ? pal.flower[(R() * 3) | 0] : null }); }
      s.parts = []; const np = Math.round(W * H / (pal.particle === 'firefly' ? 1600 : 2200));
      for (let i = 0; i < np; i++) s.parts.push({ x: R() * W, y: pal.particle === 'firefly' ? H * (0.45 + R() * 0.5) : R() * H, ph: R() * 6.28, v: 0.6 + R() * 0.8, c: R() < 0.5 });
      s.birds = cfg.birds; s.pal = pal;
      this.s = s;
      this.draw(this.t || 0);
      this.loop();
    }
    draw(t) {
      const s = this.s, c = this.ctx; if (!s || !c) return;
      const { W, H, pal, u } = s;
      const px = (x, y, w, h) => c.fillRect(Math.round(x), Math.round(y), w || 1, h || 1);
      c.clearRect(0, 0, W, H);
      c.drawImage(s.sky, 0, 0);
      if (s.stars) {
        for (const st of s.stars) {
          const v = Math.sin(t * st.sp + st.ph);
          c.fillStyle = v > 0.3 ? '#FFFFFF' : v > -0.4 ? '#9AA0BC' : '#3A426F'; px(st.x, st.y);
          if (st.big && v > 0.5) { c.fillStyle = '#7CD4FF'; px(st.x - 1, st.y); px(st.x + 1, st.y); px(st.x, st.y - 1); px(st.x, st.y + 1); }
        }
        const p = ((t + 4) % 9) / 1.1;
        if (p < 1) { const sx = W * 0.12 + p * W * 0.3, sy = H * 0.05 + p * W * 0.3 * 0.3; for (let k = 0; k < 12; k++) { c.fillStyle = k < 2 ? '#FFFFFF' : k < 6 ? '#BDE8FF' : '#565E8A'; px(sx - k, sy - k * 0.3); } }
      }
      for (const cl of s.clouds) { const span = W + cl.w; const x = (((cl.x + t * cl.v) % span) + span) % span - cl.w; c.drawImage(cl.img, Math.round(x), cl.y); }
      c.drawImage(s.land, 0, 0);
      if (s.beacon) {
        const b = (Math.sin(t * 2.2) + 1) / 2, r = 3 * u + b * 3 * u;
        c.fillStyle = '#FFE05C';
        for (let a = 0; a < 16; a++) { const an = a / 16 * 6.28 + t * 0.4; if ((a + Math.floor(t * 4)) % 2) px(s.beacon.x + Math.cos(an) * r, s.beacon.y + Math.sin(an) * r); }
      }
      if (s.chimney) {
        c.fillStyle = pal.smoke;
        for (let i = 0; i < 6; i++) { const p = (t * 0.3 + i / 6) % 1; const sz = Math.max(1, Math.round((1 + p * 2.5) * u * 0.8)); if (p > 0.75 && i % 2) continue; px(s.chimney.x + p * p * 14 * u + Math.sin(p * 7 + i) * u, s.chimney.y - p * H * 0.14, sz, sz); }
      }
      if (s.train) {
        const tr = s.train, U = tr.u, carW = 12 * U, n = 3, len = n * (carW + U) + 15 * U, span = W + len + 30;
        const x0 = Math.round(((t * tr.v) % span) - len), y = tr.y;
        for (let i = 0; i < n; i++) {
          const cx = x0 + i * (carW + U);
          c.fillStyle = '#3A426F'; px(cx, y - 8 * U, carW, U);
          c.fillStyle = '#FFF4CC'; px(cx, y - 7 * U, carW, 5 * U);
          c.fillStyle = '#FFD21F'; for (let w = 1; w < 4; w++) px(cx + w * 3 * U - U, y - 6 * U, 2 * U, 2 * U);
          c.fillStyle = '#9E1F18'; px(cx, y - 3 * U, carW, U);
          c.fillStyle = '#020414'; px(cx + 2 * U, y - 2 * U, 2 * U, 2 * U); px(cx + carW - 4 * U, y - 2 * U, 2 * U, 2 * U);
        }
        const ex = x0 + n * (carW + U);
        c.fillStyle = '#262D57'; px(ex, y - 10 * U, 5 * U, 8 * U); px(ex + 5 * U, y - 6 * U, 9 * U, 4 * U); px(ex + 10 * U, y - 9 * U, 2 * U, 3 * U);
        c.fillStyle = '#E83A30'; px(ex, y - 3 * U, 14 * U, U);
        c.fillStyle = '#FFE05C'; px(ex + 1 * U, y - 9 * U, 2 * U, 2 * U); px(ex + 14 * U, y - 5 * U, U, U);
        c.fillStyle = '#020414'; px(ex + U, y - 2 * U, 2 * U, 2 * U); px(ex + 6 * U, y - 2 * U, 2 * U, 2 * U); px(ex + 10 * U, y - 2 * U, 2 * U, 2 * U);
        c.fillStyle = pal.smoke;
        for (let i = 0; i < 7; i++) { const p = (t * 1.1 + i / 7) % 1; const sz = Math.max(1, Math.round((1 + p * 2.5) * U)); if (p > 0.7 && i % 2) continue; px(ex + 11 * U - p * 26 * U, y - 10 * U - p * 9 * U - Math.sin(p * 5) * U, sz, sz); }
      }
      if (s.birds) {
        c.fillStyle = pal.bird;
        const span = W + 90, bx = ((t * 9 + 20) % span) - 45, by = H * 0.26 + Math.sin(t * 0.6) * 3;
        for (let i = 0; i < 3; i++) {
          const x = bx - i * 7, y = by + (i === 0 ? 0 : i * 3) - (i === 2 ? 4 : 0), up = Math.floor(t * 5 + i) % 2;
          px(x, y); px(x - 1, y); px(x + 1, y);
          if (up) { px(x - 2, y - 1); px(x + 2, y - 1); } else { px(x - 2, y + 1); px(x + 2, y + 1); }
        }
      }
      const g = pal.grass;
      for (let band = 0; band < 4; band++) {
        c.fillStyle = g[band];
        for (const b of s.blades) {
          for (let k = 0; k < b.h; k++) {
            const f = k / b.h, bi = f < 0.3 ? 0 : f < 0.62 ? 1 : f < 0.9 ? 2 : 3;
            if (bi !== band) continue;
            px(b.x + Math.sin(t * 1.7 + b.x * 0.06) * f * f * 2.6 + f * 0.8, H - 1 - k);
          }
        }
      }
      for (const b of s.blades) if (b.fl && b.h > 2) { c.fillStyle = b.fl; px(b.x + Math.sin(t * 1.7 + b.x * 0.06) * 2.6 + 0.8, H - b.h - 1); }
      if (pal.particle === 'firefly') {
        for (const p of s.parts) {
          const x = p.x + Math.sin(t * 0.5 * p.v + p.ph) * 9, y = p.y + Math.cos(t * 0.7 * p.v + p.ph * 1.3) * 5, b = (Math.sin(t * 2 * p.v + p.ph * 3) + 1) / 2;
          if (b < 0.3) continue;
          if (b > 0.75) { c.fillStyle = '#A87300'; px(x - 1, y); px(x + 1, y); px(x, y - 1); px(x, y + 1); }
          c.fillStyle = b > 0.55 ? '#FFE05C' : '#D99A00'; px(x, y);
        }
      } else {
        const leaf = pal.particle === 'leaf';
        for (const p of s.parts) {
          const x = (((p.x + t * (leaf ? 7 : 11) * p.v + Math.sin(t * 1.8 + p.ph) * 3) % W) + W) % W;
          const y = (((p.y + t * (leaf ? 5 : 6) * p.v) % H) + H) % H;
          c.fillStyle = leaf ? (p.c ? '#F07A3C' : '#FFD21F') : (p.c ? '#FF9AC8' : '#FFFFFF');
          px(x, y, Math.sin(t * 6 + p.ph) > 0 ? 2 : 1, 1);
        }
      }
    }
  }
  customElements.define('pixel-scene', PixelScene);
})();
