const request = require('supertest')


jest.mock('../../../server/db/users', () => {
  userExists: (userName) => {
    if(userName = 'foo') {
      return Promise.resolve(true)
    } else {
      return Promise.resolve(false)
    }
  } 
  createUser: () =>{}
})

const server = require('../../../server/server')
test('init test', (done) => {
  request(server)
    .get('/api/v1')
    .end((err, res) => {
      expect(res.text).toBe('hi')
      done()
    })
})

test('post /api/v1/register', (done) => {
  return request(server)
    .post('/api/v1/register')
    .send({username: 'foo00'})
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(res.statusCode).toBe(200)
      done()
    })
  })
