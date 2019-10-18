function fn1() {
  fn2()
}

function fn2() {
  try {
    fn3()
  } catch (err) {
    console.log('error  from fn4')
    throw err
  }
}

function fn3() {
  fn4()
}

function fn4() {
  // throw new Error('Exception in fn4')
  // throw 1234
  fn5()
}

function f5() {
  // ...
}

console.log('start')
try {
  fn1()
  //...
  //...
} catch (err) {
  console.log('çaught an error')
}
console.log('end')
