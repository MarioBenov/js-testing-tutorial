let utils = require('./utils')

describe('sum', () => {
  beforeAll(() => {
    utils.setup(0)
  })

  afterEach(() => {
    utils.setup(0)
  })

  test('1 + 2', () => {
    let result = utils.sum(1, 2)
    expect(result).toEqual(3)
  })

  test('1 + 2 + 10', () => {
    utils.setup(10)
    let result = utils.sum(1, 2)
    expect(result).toEqual(13)
  })

  test('1 + 3', () => {
    let result = utils.sum(1, 3)
    expect(result).toEqual(4)
  })

  test('1 + 3 + 10', () => {
    utils.setup(10)
    let result = utils.sum(1, 3)
    expect(result).toEqual(14)
  })
})

describe('divide', () => {
  test('10 / 2', () => {
    expect(utils.div(10, 2)).toEqual(5)
  })
})

test('some other test', () => {
  expect('hello').toEqual('hello')
})
