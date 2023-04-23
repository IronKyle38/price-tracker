# price-tracker

<div align="center">
    <p>
        <img src="/img/banner_1200x300px.jpg" alt="Price Tracker Banner" />
    </p>
    <p>
        <a href="https://github.com/IronKyle38/price-tracker/commits/main"><img
            src="https://img.shields.io/github/last-commit/IronKyle38/price-tracker"
            alt="GitHub last commit" /></a>
        <a href="https://github.com/IronKyle38/price-tracker/network/dependencies"><img
            src="https://img.shields.io/librariesio/github/IronKyle38/price-tracker"
            alt="Dependency status for GitHub repo" /></a>
        <a href="https://github.com/IronKyle38/price-tracker/releases/latest"><img
            src="https://img.shields.io/github/v/release/IronKyle38/price-tracker"
            alt="GitHub release (latest by date)" /></a>
        <a href="https://github.com/IronKyle38/price-tracker"><img
            src="https://img.shields.io/github/languages/code-size/IronKyle38/price-tracker"
            alt="GitHub code size in bytes" /></a>
        <a href="LICENSE"><img
            src="https://img.shields.io/github/license/IronKyle38/price-tracker"
            alt="License" /></a>
    </p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a simple price tracker that you can personalize to track the price of any product on your favorite online store. It saves the price history in a CSV file that you can use to analyze the price trends.

## Installation

1. Install [Node.js](https://nodejs.org/en/download/)

2. Clone the repository
    
    ```bash
    git clone https://github.com/IronKyle38/price-tracker.git
    ```

3. Go to the project folder

    ```bash
    cd price-tracker
    ```

4. Install the dependencies

    [![puppeteer version](https://img.shields.io/github/package-json/dependency-version/IronKyle38/price-tracker/puppeteer)](https://pptr.dev/)

    ```bash
    npm install
    ```

## Usage

1. Edit the `config.json` file in the `input` folder to add your favorite online store and the product you want to track.

2. Run the script

    ```bash
    node index.js
    ```

3. The price history will be saved in a CSV file in the `output` folder.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[Licence](https://github.com/IronKyle38/price-tracker/blob/main/LICENSE)