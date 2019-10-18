async function doSomething() {
  // let pr = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 1000)
  // })
  // return pr
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })

  return 1234
}

async function baseFn() {
  console.log(Date())
  let res = await doSomething()
  // doSomething().then((res) => {
  //   ..
  // })

  console.log(res)
  console.log(Date())
}

baseFn()
