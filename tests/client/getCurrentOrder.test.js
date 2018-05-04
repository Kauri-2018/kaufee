import {getCurrentOrder} from '../../client/apiClient'

jest.mock('../../client/apiClient', () => ({
  getCurrentOrder: () => Promise.resolve([
    {
      orderId: 1,
      userName: 'Sarah',
      orderDetails: 'flat white',
      orderItemsId: 1
    }
  ])
}))

test('getCurrentOrder sends request to api/v1/current-order', () => {
  const expected = [
    {
      orderId: 1,
      userName: 'Sarah',
      orderDetails: 'flat white',
      orderItemsId: 1
    }
  ]
  return getCurrentOrder()
    .then(res => {
      expect(res).toEqual(expected)
    })
})
