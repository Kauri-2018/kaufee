const request = require('supertest')

jest.mock('../../../server/db/users', () => ({
  createUser: () => Promise.resolve(),
  userExists: username => Promise.resolve(username === 'foo'),
  getCredsByName: username => {
    if (username === 'GOODUSER') {
      return Promise.resolve({
        hash: 'GOODHASH'
      })
    } else if (username === 'BADUSER') {
      return Promise.resolve({
        hash: 'BADHASH'
      })
    } else {
      return Promise.resolve(undefined)
    }
  }
}))

jest.mock('../../../server/auth/hash', () => ({
  verifyUser: (hash, password) => Promise.resolve(hash === 'GOODHASH')
}))

jest.mock('../../../server/auth/token', () => ({
  issue: (req, res) => Promise.resolve(res.status(201).json({
    message: 'Authentication successful.',
    token: 'goosetoken'
  }))
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

test('post /api/v1/auth/login testing to see if invalid password causes 400', () => {
  return request(server)
    .post('/api/v1/auth/login')
    .send({username: 'BADUSER'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(400)
    })
})

test('post /api/v1/auth/login GOODUSER should login and receive token', () => {
  return request(server)
    .post('/api/v1/auth/login')
    .send({username: 'GOODUSER'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
})

test('post /api/v1/auth/login invalid username returns 400', () => {
  return request(server)
    .post('/api/v1/auth/login')
    .send({username: 'GOOSE'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(400)
    })
})
