function sendRequest(cb) {
  cb(null, 'response')
}

// fn2 = (getData) => {
//   let data = getData()
//   data.map().reduce()...
// }

const mockData = require('')

test('tests mocks', () => {
  // let mockCb = jest.fn(() => mockData)
  let mockCb = jest.fn()
  mockCb
    .mockImplementationOnce(() => otherMockData)
    .mockImplementationOnce(() => otherMockData2)
    .mockImplementationOnce(() => otherMockData3)
    .mockImplementation(() => mockData)
  //mockCb(123, 456)
  sendRequest(mockCb)
  console.log(mockCb.mock)

  expect(mockCb.mock.calls.length).toBe(1)
  expect(mockCb.mock.calls[0]).toBe([null, 'response'])

  expect(mockCb).toHaveBeenCalledTimes(1)
  expect(mockCb).toHaveBeenCalledWith(null, 'response')
})
