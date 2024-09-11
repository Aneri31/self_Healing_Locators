const { locators } = require('../locators/locator');

async function clickAction(page, fieldType)
 {
 
  const selectors = locators[fieldType];

  if (!selectors) {
    throw new Error(`No locators for field type: ${fieldType}`);
  }

  for (const selector of selectors) {
    try {
      await page.waitForSelector(selector, { state: 'visible' });
      await page.click(selector);
      return selector; 
    } catch (error) {
      console.log(`Selector ${selector} failed: ${error.message}`);
    }
  }

  throw new Error(`Failed to click the ${fieldType} field.`);
}

module.exports = { clickAction };
