const s = require('./src/sum')

console.log(s.sum1(10, 12))
console.log(s.sum2(10, 12))
console.log(s.sum3(10, 12))
console.log(s.sum4(10, 12))

console.log(s.sum1(10, '12'))
console.log(s.sum2(10, '12'))
console.log(s.sum3(10, '12'))
try {
  console.log(s.sum4(10, '12'))
} catch (err) {
  console.log(err)
}



const a = require('./src/async')

a.sendRequest1('http://test.com/test', 'data', (err, res) => {
  console.log(err, res)
})

a.sendRequest2('http://test.com/test', 'data', (err, res) => {
  console.log(err, res)
})

a.sendRequest3('http://test.com/test', 'data')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))


a.sendRequest4('http://test.com/test', 'data')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
