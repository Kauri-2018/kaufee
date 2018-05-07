import nock from 'nock'

import {addOrderItem} from '../../../client/apiClient'

const userId = {
  id: 1
}

const orderId = {
  id: 3
}

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
