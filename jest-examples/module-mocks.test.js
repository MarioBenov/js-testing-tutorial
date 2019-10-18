// jest.mock('axios')
const doWork = require('./do_work.js')

jest.mock('axios')

test('it calls axios.get', () => {
  // jest.mock('axios')
  // axios.get.mockImplementationOnce(...)
  doWork();
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('some-url', {body: {test: 'test'}})
})


// jest.mock('async')
// const async = require('async')
// async.series.mockImplementationOnce((tasks, callback) => {
//   callback(null, responseData)
// })
// // .mockImplementationOnce((tasks, callback) => {
// //   callback(new Error('...'), null)
// // })
// ...
// async.series.mockImplementationOnce((tasks, callback) => {
//   callback(new Error('...'), null)
// })
