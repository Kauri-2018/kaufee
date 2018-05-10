const env = require('./test-environment')
const db = require('../../../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialize(testDb)
})

afterEach(() => {
  return env.cleanup(testDb)
})

test('getUser returns an existing user', () => {
  return db.getUser(2, testDb)
    .then(user => {
      expect(user.name).toMatch(/Don/)
    })
})

test('getUser doesn\'t return a not existing user', () => {
  return db.getUser(15, testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})
