const env = require('./test-environment')
const db = require('../../../server/db/orderItems')

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

test('addToOrder adds a new order', () => {
  return db.addToOrder(2, 1, testDb)
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
