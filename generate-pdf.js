import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new', // Puppeteer v20以降
  });
  const page = await browser.newPage();

  // React ページのURL
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 必要なら待機（React の場合、描画が終わってないこともある）
  // await page.waitForSelector('#app-ready'); // ページ内の特定要素待ち
  // または
  // await page.waitForTimeout(3000); // 固定で待つ方法

  // PDF を作成
  await page.pdf({
    path: 'react-page.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();
