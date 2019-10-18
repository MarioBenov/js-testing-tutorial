function doSomething(cb) {
  // cb(err, result)
  // cb('error', 'result')
  // cb(null, 'result')
  setTimeout(() => cb(null, 'result'), 1000)
}
console.log(Date())
doSomething((err, result) => {
  if(err) {
    handleError(err)
    // console.log('It failed')
    // console.log(Date())
    return
  }

  handleSuccess(result)
  // console.log('It finished')
  // console.log(Date())
})

// do1((err, result) => {
//   if(err) {
//     ...
//     return
//   }
//   do2((err2, result2) => {
//     if(err2) {
//       ...
//       return
//     }
//     do3((err3, result3) => {
//       if(err3) {
//         ...
//         return
//       }
//       do4((err4, result4) => {
//         if(err4) {
//           ...
//           return
//         }
//         ...
//       })
//     })
//   })
// })
//
// do1()
//   .then(do2)
//   .then(do3)
//   .then(do4)

Promise.all(pr1, pr2, pr3, pr4).then((results) => ..).catch((err) => ...)

Async.series([do1, do2, do3, do4], (err, results) => {
  if(err) {
    ...
    return
  }
  ...
})
