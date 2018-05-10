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
  getUserByCredId: (id) => Promise.resolve({
    userId: id,
    credId: 20,
    name: 'Cam',
    orderText: 'Flat White'
  })
}))

const server = require('../../../server/server')

// get route test
test('GET /api/v1/profile returns user profile', () => {
  // Arrange
  const expected = {
    userId: 1,
    credId: 20,
    name: 'Cam',
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
