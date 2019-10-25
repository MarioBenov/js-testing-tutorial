const { After, Before, Then, When, defineParameterType, ParameterType } = require('cucumber')
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

When('I enter {string} in the first input', async function(username) {
  let inputElement = await driver.findElement(By.css('.login-form .field:first-child input'))
  await inputElement.sendKeys(username)
})

When('I enter {string} in the second input', async function(password) {
  let inputElement = await driver.findElement(By.css('.login-form .field:nth-child(2) input'))
  await inputElement.sendKeys(password)
})

When('I click on the {string} button', async function(btnText) {
  // let btnElement = await driver.findElement(By.js(function(btnText) {
  //   return Array.prototype.find.apply(document.getElementsByTagName('button'), (elem) => elem.innerText == btnText)
  // }, btnText))
  let buttons = await driver.findElements(By.tagName('button'))
  let found = buttons.find(async function(btn) {
    let inner = await btn.getText()
    return inner == btnText
  })
  await found.click()
})

async function findButton(btnText) {
  let buttons = await driver.findElements(By.tagName('button'))
  let found = buttons.find(async function(btn) {
    let inner = await btn.getText()
    return inner == btnText
  })
  return found
}

When('I login with username {string} and password {string}', async function(username, password) {
  let nameInput = await driver.findElement(By.css('.login-form .field:first-child input'))
  await nameInput.sendKeys(username)

  let passInput = await driver.findElement(By.css('.login-form .field:nth-child(2) input'))
  await passInput.sendKeys(password)

  let loginBtn = await findButton('Login')
  await loginBtn.click()
})

defineParameterType({
    name: 'seeOrDont',           // name
    regexp: /(don't |)see/, // regexp
    //type: Boolean,             // type
    transformer: s => !s  // transformer function
})
// Then(/I (don't |)see the main app content/, async function(shouldBeVisible) {
Then('I {seeOrDont} the main app content', async function(shouldBeVisible) {
  let element = await driver.findElement(By.className('main-content'))
  console.log(shouldBeVisible)
  if(shouldBeVisible) {
    assert(element != null)
  } else {
    assert(element == null)
  }
})


When('I wait', () => {
  //setTimeout(done, 5000)
  return new Promise((res) => setTimeout(res, 5000))
})
