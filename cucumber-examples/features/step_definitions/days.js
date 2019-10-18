const { Given, When, Then } = require('cucumber');

function doDaysMatch(day1, day2) {
  if(day1 == day2) {return 'Yep'}
  return 'Nope'
}

Given('today is {string}', function (day) {
   // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.today = day;
});

Given('tomorrow is Monday', function () {
  this.tomorrow = 'Monday';
});

When('I ask whether it\'s Friday yet', function () {
   // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.askedDay = 'Friday';
 });

When('something else', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

const assert = require('assert');

Then('I should be told {string}', function (string) {
  let result = doDaysMatch(this.today, this.askedDay)
  console.log(string, result)
  assert.equal(string, result)
});

Then('something other result', function () {
   // Write code here that turns the phrase above into concrete actions
   // return 'pending';
 });
