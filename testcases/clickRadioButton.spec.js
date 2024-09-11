const { test, expect } = require('@playwright/test');
const { clickAction } = require('../functions/clickAction');
const {navigateToBaseUrl}= require('../functions/navigateToBaseurl');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/data.json'));

test('verify checkbox selection', async ({ page }) => {
await navigateToBaseUrl(page);
const usedSelector = await clickAction (page,'checkbox_male_click');
const element = await page.$(usedSelector);
expect(await element.isChecked()).toBeTruthy();
expect(await element.isVisible()).toBeTruthy();
});

test('verify checkbox deselection', async ({ page }) => {
    await navigateToBaseUrl(page);
    const usedSelector = await clickAction(page, 'checkbox_male_click');
    let element = await page.$(usedSelector);
    await element.click(); 
    expect(await element.isChecked()).toBeTruthy();
    expect(await element.isVisible()).toBeTruthy();
  });

  test('verify checkbox visibility on page load', async ({ page }) => {
    await navigateToBaseUrl(page);
    const checkboxSelector =  "input#male";
    const element = await page.$(checkboxSelector);
    expect(await element.isVisible()).toBeTruthy();
  });

  