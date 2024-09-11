const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/data.json'));

async function navigateToBaseUrl(page) 
{
    const baseurl = data.url;
    await page.goto(baseurl);
}

module.exports = { navigateToBaseUrl };
