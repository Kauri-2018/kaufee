const env = require('./test-environment')
const db = require('../../../server/db/orders')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialize(testDb)
})

afterEach(() => {
  return env.cleanup(testDb)
})

test('test the environment', () => {
  expect(true).toBeTruthy()
})

test('getCurrentOrder returns 1 coffee order', () => {
  return db.getCurrentOrder(1, testDb)
    .then(orders => {
      const actual = orders.length
      expect(actual).toBe(1)
    })
})

test('getOrders returns all of orders table', () => {
  const expected = 1
  return db.getOrders(testDb)
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})
