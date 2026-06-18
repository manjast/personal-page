#!/usr/bin/env node
// Render carousel B (cost-discipline-2026.html) to 6 PNGs + contact sheet
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const htmlPath = path.join(__dirname, 'cost-discipline-2026.html');
const variant = 'cd';
const slideWidth = 1080;
const slideHeight = 1350;

async function main() {
  if (!fs.existsSync(htmlPath)) {
    console.error(`NOT FOUND: ${htmlPath}`);
    process.exit(1);
  }
  console.log(`Rendering ${htmlPath}`);

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--font-render-hinting=none', '--headless=new'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: slideWidth, height: slideHeight, deviceScaleFactor: 2 });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);

  const slideIds = await page.evaluate(() => {
    const slides = document.querySelectorAll('.slide');
    return Array.from(slides).map(s => s.id);
  });
  console.log(`  Found ${slideIds.length} slides`);

  for (let i = 0; i < slideIds.length; i++) {
    const slideId = slideIds[i];
    const outPath = path.join(__dirname, 'png', `${variant}-${i + 1}.png`);

    await page.evaluate((targetId) => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach(s => {
        if (s.id === targetId) {
          s.style.display = 'block';
          s.style.position = 'relative';
          s.style.margin = '0';
          s.style.top = '0';
          s.style.left = '0';
        } else {
          s.style.display = 'none';
        }
      });
      document.body.style.background = '#2A2924';
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    }, slideId);

    await new Promise(r => setTimeout(r, 150));
    await page.screenshot({
      path: outPath,
      clip: { x: 0, y: 0, width: slideWidth, height: slideHeight },
    });
    console.log(`    -> ${outPath}`);
  }

  await page.close();
  await browser.close();
  console.log('Done.');
}

main().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
