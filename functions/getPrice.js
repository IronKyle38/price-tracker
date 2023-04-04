// This function will get the price of a product from a website using Puppeteer

// Import puppeteer
const puppeteer = require('puppeteer');

async function getPrice() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.example.com/product'); // Go to the product page

    // Wait for the price element to load
    await page.waitForSelector('example-price-selector');

    // Get the price text content
    const priceText = await page.$eval('example-price-selector', el => el.textContent);

    // Extract the price value from the text
    const price = parseFloat(priceText.replace('€', '').replace(',', '.'));

    await browser.close();
    return price;
}

// Export the function
module.exports = {
    getPrice
};