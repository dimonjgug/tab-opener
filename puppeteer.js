const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // headless: false, чтобы видеть окна
    for (let i = 0; i < 50; i++) {
        const page = await browser.newPage();
        await page.goto('https://example.com');
    }
    // Не закрываем браузер сразу, чтобы посмотреть результат
    // await browser.close();
})();