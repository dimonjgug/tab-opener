const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const url = 'https://example.com';
    for (let i = 0; i < 50; i++) {
        try {
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
            console.log(`✅ Вкладка ${i + 1}`);
        } catch (err) {
            console.log(`⚠️ Вкладка ${i + 1}: ${err.message}`);
        }
    }
    console.log('Готово.');
})();