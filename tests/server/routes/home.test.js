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
