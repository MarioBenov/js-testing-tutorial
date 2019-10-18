let added = 0

function setup(val) {
  added = val
}

function sum(a, b) {
  return a + b + added
}

function div(a, b) {
  return a / b
}

module.exports = {
  sum: sum,
  setup: setup,
  div: div
}
