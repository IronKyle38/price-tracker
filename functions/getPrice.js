// This function will get the price of a product from a website using Puppeteer

// Import puppeteer
if (process.platform === 'linux') {
    var puppeteer = require('puppeteer-core');
} else {
    var puppeteer = require('puppeteer');
}

async function getPrice(settings, n) {

    // Launch the browser
    if (process.platform === 'linux') {
        var browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium-browser' });
    } else {
        var browser = await puppeteer.launch();
    }

    // Open a new page
    const page = await browser.newPage();
    await page.goto(settings.products[n].productURL);

    // Wait for the price element to load
    await page.waitForSelector(settings.products[n].cssSelector);

    // Get the price text content
    const priceText = await page.$eval(settings.products[n].cssSelector, el => el.textContent);

    // Extract the price value from the text
    const price = parseFloat(priceText.replace(settings.currencySymbol, '').replace(settings.decimalSeparator, '.'));

    await browser.close();
    return price;
}

// Export the function
module.exports = {
    getPrice
};