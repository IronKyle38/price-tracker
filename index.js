// Install puppeteer: npm install puppeteer
// Run: node index.js

// Import modules
const fs = require('fs');
const { getPrice } = require('./functions/getPrice');

// Open settings file
const settings = require('./input/settings.json');

// Create today's date
const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// Loop through the products
for (let n = 0; n < settings.products.length; n++) {
  // Get the price
  getPrice(settings, n).then(price => {
    // Save the price to an output file .csv
    fs.appendFile(`./output/${settings.products[n].productName}.csv`, `${date},${settings.products[n].siteName},${settings.products[n].productQuantity},${price}\n`, err => {
      if (err) throw err;
    });
  });
}