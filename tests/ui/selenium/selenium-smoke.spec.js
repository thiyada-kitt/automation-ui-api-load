const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function seleniumSmoke() {
  let driver;
  try {
    const options = new chrome.Options()
      .addArguments('--headless=new', '--no-sandbox', '--disable-dev-shm-usage');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get('https://example.com');
    await driver.wait(until.titleIs('Example Domain'), 10000);
    const heading = await driver.findElement(By.css('h1'));
    const text = await heading.getText();

    if (text !== 'Example Domain') {
      throw new Error(`Unexpected heading: ${text}`);
    }
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
