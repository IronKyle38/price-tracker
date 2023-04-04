// Install puppeteer: npm install puppeteer
// Run: node index.js

// Import puppeteer
const { getPrice } = require('./functions/getPrice');
const puppeteer = require('puppeteer');

// Open settings file
const settings = require('./input/settings.json');

// Loop through the products
for (let n = 0; n < settings.products.length; n++) {
  // Get the price
  getPrice(settings, n);
}