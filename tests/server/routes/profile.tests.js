const request = require('supertest')

// jest mock api data

// mock auth/token
/* jest.mock('../../../server/auth/token', () => ({
  decode: (req, res, next) => Promise.resolve(res.status(201).json({
    message: 'Authentication successful.',
    token: 'goosetoken'
  }))
})) */

// mock DB Users
jest.mock('../../../server/db/users', () => ({
  getUser: (id) => Promise.resolve([
    {
      userId: id,
      name: 'Don',
      orderText: 'Flat White'
    }
  ])
}))

const server = require('../../../server/server')

// get route test
test('get /api/v1/profile returns user profile', () => {
  // Arrange
  const expected = {
    userId: 1,
    name: 'Don',
    orderText: 'Flat White'
  }
  // Act
  return request(server)
    .get('/api/v1/profile')
    .set('Accept', 'application/json')
    // Assert
    .then(res => {
      expect(res.user).toBe(expected)
    })
})

// put route test
