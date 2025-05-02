import puppeteer from 'puppeteer';

(async () => {
  const URL = "https://soags.github.io/resume/";
  const FILE_NAME = `職務経歴書_${getDateStamp()}.pdf`;

  const browser = await puppeteer.launch({
    headless: 'new', 
  });
  const page = await browser.newPage();  
  await page.goto(URL, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: FILE_NAME,
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();

function getDateStamp() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}${month}${day}`;
}