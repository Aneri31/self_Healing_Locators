const { test, expect } = require('@playwright/test');
const { fillField } = require('../functions/fillField');
const {navigateToBaseUrl}= require('../functions/navigateToBaseurl');
const fs = require('fs');
const { locators } = require('../locators/locator');
const data = JSON.parse(fs.readFileSync('./data/data.json'));

test('fill the field', async ({ page }) => {
await navigateToBaseUrl(page); 
const emailAddress= await data.emailAddress;
await fillField(page, 'email', data.emailAddress);

});
test('verify the email field is empty after clearing', async ({ page }) => {
    await navigateToBaseUrl(page);
    const emailFieldSelector = await fillField(page, 'email', data.emailAddress);
    const email = await page.$(emailFieldSelector);
    await email.focus();
    await page.keyboard.press('Control+A'); 
    await page.keyboard.press('Backspace');
    const fieldValue = await email.inputValue();
    expect(fieldValue).toBe(''); 
  });

