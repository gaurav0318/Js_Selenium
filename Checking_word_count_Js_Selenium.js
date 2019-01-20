const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://ijme.in/issues/anticipating-new-frontiers/');
    await driver.findElements(By.partialLinkText("FULL TEXT")).then((elements) => console.log(elements.length));
  } finally {
    await driver.quit();
  }
})();