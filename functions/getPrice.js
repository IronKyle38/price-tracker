// This function will get the price of a product from a website using Puppeteer

// Import puppeteer
const puppeteer = require('puppeteer');

async function getPrice(settings, n) {
    const browser = await puppeteer.launch();
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