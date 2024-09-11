const { test, expect } = require('@playwright/test');
const { clickAction } = require('../functions/clickAction');
const {navigateToBaseUrl}= require('../functions/navigateToBaseurl');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/data.json'));

test('click the browswer button', async ({ page, context}) => {
await navigateToBaseUrl(page);
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    clickAction(page, 'new_browser_window')
  ]);

  await newPage.waitForLoadState();
  expect(newPage.url()).toBe('https://demo.opencart.com/');
})