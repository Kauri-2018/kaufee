const env = require('./test-environment')
const db = require('../server/db')

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
  const expected = 1
  const id = 1
  return db.getCurrentOrder(id, testDb)
    .then(orders => {
      console.log(orders)
      const actual = orders.length
      expect(actual).toBe(expected)
    })
})
