const request = require('supertest')

jest.mock('../../../server/db/users', () => ({
  createUser: () => Promise.resolve(),
  userExists: username => Promise.resolve(username === 'foo')
}))

const server = require('../../../server/server')

test('post /api/v1/auth/register', () => {
  return request(server)
    .post('/api/v1/auth/register')
    .send({username: 'notfoo'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
})

test('post /api/v1/auth/login', () => {
  return request(server)
    .post('/api/v1/auth/login')
    .send({username: 'notfoo'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
})
