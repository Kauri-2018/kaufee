import {getCurrentOrder} from '../../../client/apiClient'

const nock = require('nock')

nock('http://localhost')
  .get('/api/v1/current-order')
  .reply(200, 'complete')

test('getCurrentOrder sends get request to server', () => {
  return getCurrentOrder()
    .then(res => {
      expect(res).toBeTruthy()
    })
})
