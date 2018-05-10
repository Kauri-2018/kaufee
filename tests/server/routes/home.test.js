const request = require('supertest')

jest.mock('../../../server/auth/token', () => ({
  decode: (req, res, next) => {
    req.user = {
      id: 1,
      username: 'testuser'
    }
    next()
  },
  issue: (req, res, next) => next()
}))

jest.mock('../../../server/db/orders', () => ({
  getCurrentOrderItems: () => Promise.resolve([
    {
      orderId: 1,
      userName: 'Sarah',
      orderDetails: 'flat white',
      orderItemsId: 1
    }
  ]),
  addToOrder: (userId, orderId) => {
    if (orderId < 1) {
      return Promise.reject(new Error('Order does not exist.'))
    }
    if (userId < 1) {
      return Promise.reject(new Error('User does not exist.'))
    }
    return Promise.resolve()
  }
}))

jest.mock('../../../server/db/users', () => ({
  userExists: () => Promise.resolve(true)
}))

const server = require('../../../server/server')

test('GET /api/v1/current-order returns current order', () => {
  const expected = 'flat white'
  return request(server)
    .get('/api/v1/current-order')
    .set('Accept', 'application/json')
    .expect(200)
    .then(res => {
      expect(res.body.items[0].order).toBe(expected)
    })
})

test('POST /api/v1/current-order add to order', () => {
  const expected = 200
  const orderData = {
    userId: 1,
    orderId: 1
  }
  return request(server)
    .post('/api/v1/current-order')
    .set('Authorization', 'Bearer thisWontGetUsed')
    .send(orderData)
    .expect(200)
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

test('POST /api/v1/current-order should not add to order', () => {
  const expected = 500
  const orderData = {
    userId: 0,
    orderId: 1
  }
  return request(server)
    .post('/api/v1/current-order')
    .set('Authorization', 'Bearer thisWontGetUsed')
    .send(orderData)
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

test('POST /api/v1/current-order should not add to order', () => {
  const expected = 500
  const orderData = {
    userId: 1,
    orderId: 0
  }
  return request(server)
    .post('/api/v1/current-order')
    .set('Authorization', 'Bearer thisWontGetUsed')
    .send(orderData)
    .then(res => {
      expect(res.status).toBe(expected)
    })
})
