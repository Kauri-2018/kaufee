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

test('post /api/v1/current-order/order-item/:orderId/:userId add to order', () => {
  const expected = 200
  return request(server)
    .post('/api/v1/current-order/order-item/1/1')
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

test('post /api/v1/current-order/order-item/0/1 should not add to order', () => {
  const expected = 500
  return request(server)
    .post('/api/v1/current-order/order-item/0/1')
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

test('post /api/v1/current-order/order-item/1/0 should not add to order', () => {
  const expected = 500
  return request(server)
    .post('/api/v1/current-order/order-item/1/0')
    .then(res => {
      expect(res.status).toBe(expected)
    })
})
