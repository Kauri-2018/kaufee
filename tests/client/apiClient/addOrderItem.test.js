import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'thisIsAFakeTestToken'
}))

const userId = {
  id: 1
}

const orderId = {
  id: 3
}

import {addOrderItem} from '../../../client/apiClient'

nock('http://localhost')
  .post('/api/v1/current-order')
  .reply(200, {
    userId,
    orderId
  })

test('addOrderItem sends post request to server', () => {
  return addOrderItem(userId, orderId)
    .then(res => {
      expect(res.body.userId).toMatchObject(userId)
    })
})
