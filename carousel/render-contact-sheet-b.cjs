#!/usr/bin/env node
// Compose carousel B (cost-discipline) contact sheet
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function main() {
  const slidePaths = [];
  for (let i = 1; i <= 6; i++) {
    const p = path.join(__dirname, 'png', `cd-${i}.png`);
    if (fs.existsSync(p)) slidePaths.push(p);
    else slidePaths.push(null);
  }
  if (slidePaths.some(p => !p)) {
    console.error('Missing slides');
    process.exit(1);
  }

  const imgs = slidePaths.map(p => `data:image/png;base64,${fs.readFileSync(p).toString('base64')}`);

  const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  body { margin: 0; padding: 40px; background: #1A1A1A; font-family: -apple-system, system-ui, sans-serif; }
  h1 { color: #FFFFFF; font-size: 28px; margin: 0 0 8px 0; font-weight: 700; }
  .sub { color: #999; font-size: 14px; margin-bottom: 32px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .cell { background: #000; }
  .cell img { width: 100%; height: auto; display: block; }
  .label { color: #999; font-size: 12px; padding: 8px 0 0 0; }
</style></head>
<body>
  <h1>Carousel B — The 2026 cost discipline (A+C design)</h1>
  <div class="sub">Contact sheet — 6 slides (1080x1350 each) — companion to carousel A</div>
  <div class="grid">
    ${imgs.map((src, i) => `<div class="cell"><img src="${src}"/><div class="label">Slide ${i + 1}</div></div>`).join('\n')}
  </div>
</body></html>`;

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--font-render-hinting=none', '--headless=new'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 2400, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 200));
  const outPath = path.join(__dirname, 'png', 'contact-sheet-cd.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`  -> ${outPath}`);

  await page.close();
  await browser.close();
  console.log('Done.');
}

main().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
