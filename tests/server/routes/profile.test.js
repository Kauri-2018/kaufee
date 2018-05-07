const request = require('supertest')

// mock auth/token
jest.mock('../../../server/auth/token', () => ({
  decode: (req, res, next) => {
    req.user = {
      id: 1
    }
    next()
  },
  issue: (req, res, next) => next()
}))

// mock DB Users
jest.mock('../../../server/db/users', () => ({
  getUser: (id) => Promise.resolve({
    userId: id,
    name: 'Don',
    orderText: 'Flat White'
  })
}))

const server = require('../../../server/server')

// get route test
test('GET /api/v1/profile returns user profile', () => {
  // Arrange
  const expected = {
    userId: 1,
    name: 'Don',
    orderText: 'Flat White'
  }
  // Act
  return request(server)
    .get('/api/v1/profile')
    .set('Authorization', 'Bearer thisWontGetUsed')
    .set('Accept', 'application/json')
    .then(res => {
      // Assert
      expect(res.body).toEqual(expected)
    })
})
