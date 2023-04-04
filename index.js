// Install puppeteer: npm install puppeteer
// Run: node index.js

// Import puppeteer
const { getPrice } = require('./functions/getPrice');
const puppeteer = require('puppeteer');

// Open settings file
const settings = require('./input/settings.json');

    // Wait for the price element to load
    await page.waitForSelector('example-price-selector');

    // Get the price text content
    const priceText = await page.$eval('example-price-selector', el => el.textContent);

    // Extract the price value from the text
    const price = parseFloat(priceText.replace('€', '').replace(',', '.'));

    await browser.close();
    return price;
}

// Call the function and log the price
getPrice().then(price => {
    console.log(`The price is ${price}`);
});