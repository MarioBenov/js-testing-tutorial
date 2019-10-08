const Async = require('async')

const request1 = require('./request').request1
const request2 = require('./request').request2

function sendRequest1(url, payload, cb) {
  console.log(`Called sendRequest1`)
  request1(url, payload, (err, response) => {
    if(err) {
      console.log('sendRequest1 error')
      cb(err)
      return;
    }

    console.log('sendRequest1 success')
    cb(null, response)
  })
}

function sendRequest2(url, payload, cb) {
  console.log(`Called sendRequest2`)
  Async.series([
    (next) => request1(url, payload, next)
  ,
    (next) => request1(url, payload, next)
  ], (err, response) => {
    if(err) {
      console.log('sendRequest2 error')
      cb(err)
      return;
    }

    console.log('sendRequest2 success')
    cb(null, response)
  });
}

function sendRequest3(url, payload) {
  console.log(`Called sendRequest3`)
  return new Promise((resolve, reject) => {
    request1(url, payload, (err, response) => {
      if(err) {
        console.log('sendRequest3 error')
        reject(err)
        return;
      }

      console.log('sendRequest3 success')
      resolve(null, response)
    })
  })
}

async function sendRequest4(url, payload) {
  console.log(`Called sendRequest4`)
  // Normally this would be enough. 
  // let result = await request2(url, payload)
  // return result

  // Example of additionally logging the success and failure.
  let result
  try {
    result = await request2(url, payload)
  } catch(err) {
    console.log('sendRequest4 error')
    throw err
  }

  if(result) {
    console.log('sendRequest4 success')
  }

  return result
}


module.exports = {
  sendRequest1: sendRequest1,
  sendRequest2: sendRequest2,
  sendRequest3: sendRequest3,
  sendRequest4: sendRequest4
}
