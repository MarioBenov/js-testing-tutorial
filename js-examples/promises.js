function doSomething() {
  let pr = new Promise((resolve, reject) => {
    setTimeout(reject, 1000)
    // resolve(1234)
    // reject()
    // send request
    //   on success => resolve(result)
    //   on fail => reject(error)
  })
  return pr
}

let a = doSomething();
console.log(Date())
a.then((result) => {
  console.log('It finished 1', result)
  console.log(Date())
  return result
}).then((result) => {
  console.log('It finished 2', result)
  console.log(Date())
  return result
}).then((result) => {
  console.log('It finished 3', result)
  console.log(Date())
  return result
}).then((result) => {
  console.log('It finished 4', result)
  console.log(Date())
})
a.catch((err) => {
  console.log('There was an error')
  console.log(Date())
})
a.finally(() => {
  console.log('In the finally')
  console.log(Date())
})

//a.then(...).then(...).then(...).catch(...)
