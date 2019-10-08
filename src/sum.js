const _ = require('lodash')

function sum1(a, b) {
  console.log(`Called sum1 with arguments ${a} and ${b}`)
  return a + b;
}

function sum2(a, b) {
  console.log(`Called sum2 with arguments ${a} and ${b}`)
  if(Number(a) == NaN) {
    a = 0;
  } else {
    a = Number(a)
  }

  if(Number(b) == NaN) {
    b = 0;
  } else {
    b = Number(b)
  }

  return a + b;
}

function sum3(a, b) {
  console.log(`Called sum3 with arguments ${a} and ${b}`)
  if(!_.isNumber(a)) {
    a = 0;
  }

  if(!_.isNumber(b)) {
    b = 0;
  }

  return a + b;
}

function sum4(a, b) {
  console.log(`Called sum4 with arguments ${a} and ${b}`)
  if(!_.isNumber(a) || !_.isNumber(b)) {
    throw new Error('Not a number')
  }

  return a + b;
}

module.exports = {
  sum1: sum1,
  sum2: sum2,
  sum3: sum3,
  sum4: sum4
}
