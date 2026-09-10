const puppeteer = require('puppeteer');

(async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: false,          // видим окна
            defaultViewport: null,    // вкладки на весь экран
            args: ['--start-maximized']
        });

        const url = 'https://example.com'; // замени на нужный сайт
        const count = 50;

        for (let i = 0; i < count; i++) {
            try {
                const page = await browser.newPage();
                await page.goto(url, {
                    waitUntil: 'domcontentloaded', // не ждём полной загрузки
                    timeout: 15000                  // 15 сек максимум
                });
                console.log(`✅ Вкладка ${i + 1} открыта`);
            } catch (err) {
                console.log(`⚠️ Вкладка ${i + 1} не загрузилась: ${err.message}`);
            }
        }

        console.log('Готово. Браузер останется открытым.');
        // await browser.close(); // раскомментируй, чтобы закрыть после
    } catch (err) {
        console.error('Ошибка запуска браузера:', err);
        if (browser) await browser.close();
    }
})();