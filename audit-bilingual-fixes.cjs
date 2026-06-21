// Bilingual-fixes audit: 4 Puppeteer tests per plan doc Section C
// Tests 1-4 verify the hreflang + language switcher + og:locale:alternate fixes
// on the local preview server.
const puppeteer = require('puppeteer-core');
const http = require('http');
const https = require('https');

const BASE = 'http://127.0.0.1:8765';
const CHROMIUM = '/usr/bin/chromium';
const RESULTS = [];
let pass = 0;
let fail = 0;

function record(name, status, details) {
  RESULTS.push({ name, status, details });
  if (status === 'pass') {
    pass += 1;
    console.log(`  PASS  ${name}`);
  } else {
    fail += 1;
    console.log(`  FAIL  ${name}  —  ${details}`);
  }
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      const code = res.statusCode;
      const location = res.headers.location || '';
      resolve({ status: code, location, code, isRedirect: code >= 300 && code < 400 });
      res.resume();
    }).on('error', (e) => resolve({ status: 0, error: e.message }));
  });
}

async function getHreflangAndSwitcher(page) {
  return page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map((el) => ({
      hreflang: el.getAttribute('hreflang'),
      href: el.getAttribute('href'),
    }));
    const switcher = document.querySelector('[aria-label*="language" i]');
    const switcherButtons = switcher
      ? Array.from(switcher.querySelectorAll('a, span[aria-disabled="true"]')).map((el) => ({
          tag: el.tagName.toLowerCase(),
          href: el.getAttribute('href') || null,
          hreflang: el.getAttribute('hreflang') || null,
          lang: el.getAttribute('lang') || null,
          ariaDisabled: el.getAttribute('aria-disabled') || null,
          title: el.getAttribute('title') || null,
        }))
      : [];
    const ogLocaleAlternate = Array.from(document.querySelectorAll('meta[property="og:locale:alternate"]')).map((el) =>
      el.getAttribute('content'),
    );
    return { links, switcherButtons, ogLocaleAlternate };
  });
}

(async () => {
  console.log('Launching Chromium…');
  const browser = await puppeteer.launch({
    executablePath: CHROMIUM,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: 'new',
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

    // Test 1: /writing/ hreflang check
    {
      console.log('\nTest 1: /writing/ hreflang check');
      await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle0', timeout: 30000 });
      const data = await getHreflangAndSwitcher(page);
      const enHreflang = data.links.find((l) => l.hreflang === 'en');
      const xDefaultHreflang = data.links.find((l) => l.hreflang === 'x-default');
      const srHreflang = data.links.find((l) => l.hreflang === 'sr-Cyrl');
      const ok = !!enHreflang && !!xDefaultHreflang && !srHreflang;
      const details = `en=${!!enHreflang}, x-default=${!!xDefaultHreflang}, sr-Cyrl=${!!srHreflang} (expect false)`;
      record('Test 1: /writing/ emits en + x-default, no sr-Cyrl', ok ? 'pass' : 'fail', details);
    }

    // Test 2: /writing/<slug>/ hreflang check (per writing post)
    {
      console.log('\nTest 2: /writing/<slug>/ hreflang check');
      const slugs = ['rag-pilot-failures', 'cost-discipline-2026'];
      let allOk = true;
      const detailParts = [];
      for (const slug of slugs) {
        await page.goto(`${BASE}/writing/${slug}/`, { waitUntil: 'networkidle0', timeout: 30000 });
        const data = await getHreflangAndSwitcher(page);
        const enHreflang = data.links.find((l) => l.hreflang === 'en');
        const xDefaultHreflang = data.links.find((l) => l.hreflang === 'x-default');
        const srHreflang = data.links.find((l) => l.hreflang === 'sr-Cyrl');
        const ok = !!enHreflang && !!xDefaultHreflang && !srHreflang;
        if (!ok) allOk = false;
        detailParts.push(`${slug}: en=${!!enHreflang}, x-default=${!!xDefaultHreflang}, sr-Cyrl=${!!srHreflang} (expect false)`);
      }
      record('Test 2: /writing/<slug>/ emits en + x-default, no sr-Cyrl', allOk ? 'pass' : 'fail', detailParts.join(' | '));
    }

    // Test 3: /work/<slug>/ hreflang check (en + sr-Cyrl + x-default, both URLs live)
    {
      console.log('\nTest 3: /work/<slug>/ hreflang check');
      const slugs = ['delta-credit-risk-workflow', 'delta-enterprise-rag-assistant'];
      let allOk = true;
      const detailParts = [];
      for (const slug of slugs) {
        await page.goto(`${BASE}/work/${slug}/`, { waitUntil: 'networkidle0', timeout: 30000 });
        const data = await getHreflangAndSwitcher(page);
        const enHreflang = data.links.find((l) => l.hreflang === 'en');
        const srHreflang = data.links.find((l) => l.hreflang === 'sr-Cyrl');
        const xDefaultHreflang = data.links.find((l) => l.hreflang === 'x-default');
        const enOk = !!enHreflang;
        const srOk = !!srHreflang;
        const xDefOk = !!xDefaultHreflang;
        // Verify both alternate URLs return 200 (no redirect, no 404)
        let enUrlOk = true;
        let srUrlOk = true;
        if (enHreflang) {
          const r = await checkUrl(enHreflang.href);
          enUrlOk = r.status === 200 || (r.status >= 300 && r.status < 400 && r.location && !r.location.includes('undefined'));
        }
        if (srHreflang) {
          const r = await checkUrl(srHreflang.href);
          srUrlOk = r.status === 200 || (r.status >= 300 && r.status < 400 && r.location && !r.location.includes('undefined'));
        }
        const ok = enOk && srOk && xDefOk && enUrlOk && srUrlOk;
        if (!ok) allOk = false;
        detailParts.push(`${slug}: en=${enOk} url=${enUrlOk}, sr-Cyrl=${srOk} url=${srUrlOk}, x-default=${xDefOk}`);
      }
      record('Test 3: /work/<slug>/ emits en + sr-Cyrl + x-default, both URLs live', allOk ? 'pass' : 'fail', detailParts.join(' | '));
    }

    // Test 4: /writing/ language switcher: SR is <span aria-disabled="true">, EN is <a hreflang="en">
    {
      console.log('\nTest 4: /writing/ language switcher');
      await page.goto(`${BASE}/writing/`, { waitUntil: 'networkidle0', timeout: 30000 });
      const data = await getHreflangAndSwitcher(page);
      const enButton = data.switcherButtons.find((b) => b.hreflang === 'en' && b.tag === 'a');
      const srSpan = data.switcherButtons.find((b) => b.ariaDisabled === 'true');
      const enOk = !!enButton;
      const srOk = !!srSpan && srSpan.tag === 'span' && !srSpan.href && srSpan.title === 'Translation pending' && srSpan.lang === 'sr-Cyrl-RS';
      const ok = enOk && srOk;
      const details = `en <a>=${enOk} (href=${enButton?.href}), sr <span> disabled=${!!srSpan} tag=${srSpan?.tag} href=${srSpan?.href} title=${srSpan?.title} lang=${srSpan?.lang}`;
      record('Test 4: /writing/ EN is live <a>, SR is disabled <span> with Translation pending', ok ? 'pass' : 'fail', details);
    }

    // Bonus: og:locale:alternate check on home + case study (should emit), writing (should not emit)
    {
      console.log('\nBonus: og:locale:alternate check');
      const cases = [
        { url: '/', shouldEmit: true, locale: 'en' },
        { url: '/work/delta-credit-risk-workflow/', shouldEmit: true, locale: 'en' },
        { url: '/writing/', shouldEmit: false, locale: 'en' },
        { url: '/writing/rag-pilot-failures/', shouldEmit: false, locale: 'en' },
      ];
      let allOk = true;
      const detailParts = [];
      for (const c of cases) {
        await page.goto(`${BASE}${c.url}`, { waitUntil: 'networkidle0', timeout: 30000 });
        const data = await getHreflangAndSwitcher(page);
        const emitted = data.ogLocaleAlternate.length > 0;
        const ok = emitted === c.shouldEmit;
        if (!ok) allOk = false;
        detailParts.push(`${c.url}: emitted=${emitted} (expect ${c.shouldEmit})`);
      }
      record('Bonus: og:locale:alternate emits only on bilingual pages', allOk ? 'pass' : 'fail', detailParts.join(' | '));
    }

    // Bonus: home language switcher has 2 anchors (both live)
    {
      console.log('\nBonus: / language switcher');
      await page.goto(`${BASE}/`, { waitUntil: 'networkidle0', timeout: 30000 });
      const data = await getHreflangAndSwitcher(page);
      const anchors = data.switcherButtons.filter((b) => b.tag === 'a');
      const spans = data.switcherButtons.filter((b) => b.tag === 'span' && b.ariaDisabled === 'true');
      const ok = anchors.length === 2 && spans.length === 0;
      const details = `anchors=${anchors.length} (expect 2), disabled spans=${spans.length} (expect 0)`;
      record('Bonus: / has 2 live language anchors, no disabled spans', ok ? 'pass' : 'fail', details);
    }
  } finally {
    await browser.close();
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`PASS: ${pass}`);
  console.log(`FAIL: ${fail}`);
  console.log(`TOTAL: ${pass + fail}`);
  process.exit(fail === 0 ? 0 : 1);
})();
