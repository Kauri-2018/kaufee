const request = require('supertest')

jest.mock('../../../server/db/orders', () => ({
  getCurrentOrder: (id) => Promise.resolve([
    {
      orderId: id,
      userName: 'Sarah',
      orderDetails: 'flat white',
      orderItemsId: 1
    }
  ])
}))

jest.mock('../../../server/db/orderItems', () => ({
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

const server = require('../../../server/server')

test('get /api/v1/current-order returns current order', () => {
  const expected = 'flat white'
  return request(server)
    .get('/api/v1/current-order')
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.body.items[0].order).toBe(expected)
    })
})

test('post /api/v1/current-order add to order', () => {
  const expected = 200
  const orderData = {
    userId: 1,
    orderId: 1
  }
  return request(server)
    .post('/api/v1/current-order')
    .send(orderData)
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

test('post /api/v1/current-order should not add to order', () => {
  const expected = 500
  const orderData = {
    userId: 0,
    orderId: 1
  }
  return request(server)
    .post('/api/v1/current-order')
    .send(orderData)
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

test('post /api/v1/current-order should not add to order', () => {
  const expected = 500
  const orderData = {
    userId: 1,
    orderId: 0
  }
  return request(server)
    .post('/api/v1/current-order')
    .send(orderData)
    .then(res => {
      expect(res.status).toBe(expected)
    })
})
