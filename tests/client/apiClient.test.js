const request = require('supertest')

jest.mock('../../client/apiClient', () => ({
  getCurrentOrder: () => Promise.resolve([
    {
      orderId: 1,
      userName: 'Sarah',
      orderDetails: 'flat white',
      orderItemsId: 1
    }
  ]
)
}))

const server = require('../../server/server')

test('getCurrentOrder returns the current order', () => {
  const expected = 'flat white'
  return request(server)
    .get('/api/v1/current-order')
    .set('Accept', 'application/json')
    .then(res => {
      console.log(res.body)
      expect(res.body.items[0].order).toBe(expected)
    })
})
