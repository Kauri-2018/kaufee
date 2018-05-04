import {getCurrentOrder} from '../../client/apiClient'

const nock = require('nock')

const getCurrentOrderFn = nock('/api/v1/current-order')
  .get('/api/v1/current-order')
  .reply(200, {
    message: 'Test successful'
  })

// jest.mock('../../client/apiClient', () => ({
//   getCurrentOrder: () => Promise.resolve([
//     {
//       orderId: 1,
//       userName: 'Sarah',
//       orderDetails: 'flat white',
//       orderItemsId: 1
//     }
//   ])
// }))

test('getCurrentOrder sends request to server', () => {
  const expected = 200
  return getCurrentOrderFn()
    .then(res => {
      expect(res.status).toBe(expected)
    })
})

// test('getCurrentOrder returns order', () => {
//   const expected = [
//     {
//       orderId: 1,
//       userName: 'Sarah',
//       orderDetails: 'flat white',
//       orderItemsId: 1
//     }
//   ]
//   return getCurrentOrder()
//     .then(res => {
//       expect(res).toEqual(expected)
//     })
// })

// test('getCurrentOrder sends request to api/v1/current-order', () => {
//   const expected = 200
//   return getCurrentOrder()
//     .then(res => {
//       expect(res.status).toBe(expected)
//     })
// })
