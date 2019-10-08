function request1(url, payload, cb) {
  setTimeout(() => {
    cb(null, 123)
    // cb('errror', null)
  }, 1000)
}

function request2(url, payload) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123)
      // reject('error')
    }, 1000)
  })
}

module.exports = {
  request1: request1,
  request2: request2
}
