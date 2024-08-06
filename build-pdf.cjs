const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://soags.github.io/resume/');

  if (!fs.existsSync('./dist')){
    fs.mkdirSync('./dist');
  }

  await page.pdf({
    path: './dist/resume.pdf',
    format: 'A4',
  });

  browser.close();
  console.log('PDF generated');
})();