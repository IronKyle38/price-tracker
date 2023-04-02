// Install puppeteer: npm install puppeteer
// Run: node index.js

// Import puppeteer
const puppeteer = require('puppeteer');

// Define the async function that will get the price of the product
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

// Call the function and log the price
getPrice().then(price => {
    console.log(`The price is ${price}`);
});