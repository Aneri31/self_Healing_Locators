const locators = 
{
  email: [
    "input#email",
    "//input[starts-with(@id, 'emai')]",
    "//div[@class='form-group']//input[@id='email']",
  ],
  checkbox_male_click: [
    "input#male",
    "//input[starts-with(@id,'mal')]",
    "//input[@class='form-check-input' and @value='male']",
  ],
  new_browser_window:[
    "//button[normalize-space()='New Browser Window']",
    "//div[@class='widget-content']/child::button[contains(.,'New Browser')]"
  ]
};

module.exports = { locators };
