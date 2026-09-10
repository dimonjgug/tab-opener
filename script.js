const puppeteer = require('puppeteer');

(async () => {
    let browser;
    try {
        console.log('🚀 Запуск браузера Chrome...');
        
        browser = await puppeteer.launch({
            headless: false,          // Видим окна браузера
            defaultViewport: null,    // Вкладки на весь экран
            args: ['--start-maximized']
        });

        const url = 'https://example.com';
        const count = 50;
        let successCount = 0;

        console.log(`📂 Открытие ${count} вкладок с URL: ${url}\n`);

        for (let i = 0; i < count; i++) {
            try {
                const page = await browser.newPage();
                await page.goto(url, {
                    waitUntil: 'domcontentloaded',
                    timeout: 15000
                });
                successCount++;
                console.log(`✅ Вкладка ${i + 1}/${count} открыта успешно`);
            } catch (err) {
                console.log(`⚠️  Вкладка ${i + 1}/${count} не загрузилась: ${err.message}`);
            }
        }

        console.log(`\n✨ Готово! Успешно открыто: ${successCount}/${count} вкладок`);
        console.log('💡 Браузер остаётся открытым. Закройте его вручную.');

    } catch (err) {
        console.error('❌ Ошибка запуска браузера:', err.message);
        if (browser) {
            await browser.close();
        }
        process.exit(1);
    }
})();