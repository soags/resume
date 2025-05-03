import puppeteer from 'puppeteer'

(async () => {
  const URL = 'https://soags.github.io/resume/'

  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.goto(URL, { waitUntil: 'networkidle0' })

  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
  })

  await browser.close()
})()
