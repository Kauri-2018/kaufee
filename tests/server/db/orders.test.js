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

test('getCurrentOrder returns 3 coffee orders', () => {
  return db.getCurrentOrderItems(testDb)
    .then(orders => {
      const actual = orders.length
      expect(actual).toBe(3)
    })
})

test('getOrders returns all of orders table', () => {
  const expected = 2
  return db.getOrders(testDb)
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('orderExists finds existing order', () => {
  return db.orderExists(1, testDb)
    .then(orderExists => {
      expect(orderExists).toBeTruthy()
    })
})

test('orderExists doesn\'t find non-existing order', () => {
  return db.orderExists(-1, testDb)
    .then(orderExists => {
      expect(orderExists).toBeFalsy()
    })
})

test('addToOrder adds a new order', () => {
  return db.addToOrder(5, 1, testDb)
    .then(numInserted => {
      expect(numInserted.length).toBe(1)
    })
})

test('addToOrder does not add on non-existent order', () => {
  return db.addToOrder(2, -1, testDb)
    .catch(err => {
      expect(err.message).toMatch('Order does not exist.')
    })
})

test('addToOrder does not add on non-existent user', () => {
  return db.addToOrder(-1, 1, testDb)
    .catch(err => {
      expect(err.message).toMatch('User does not exist.')
    })
})
