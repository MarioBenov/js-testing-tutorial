const { After, Before, Then, When } = require('cucumber')
const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')
require('chromedriver')

let driver;

Before({tags: '@App'}, async function() {
  // console.log('BEFORE')
  // new Builder().forBrowser('chrome').build().then((driver) => ...)
  driver = await new Builder().forBrowser('chrome').build()
})

After({tags: '@App'}, async function() {
  await driver.quit()
})

When('I view the app in the browser', async function() {
  await driver.get('file://K:\\Haemimont\\js-testing-tutorial\\cucumber-examples\\app\\index.html')
})

Then('I see the Login page', async function() {
  // setTimeout(done, 1000)
  let formElement = await driver.findElement(By.className('login-form'))
  assert(formElement != null)
})
