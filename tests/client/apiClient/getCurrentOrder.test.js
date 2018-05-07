import { getCurrentOrder } from '../../../client/apiClient'

const nock = require('nock')

nock('http://localhost')
  .get('/api/v1/current-order')
  .reply(200, {
    isCurrentOrderActive: true,
    id: 1,
    items: [{
      id: 1,
      name: 'Zoe',
      order: 'Flat white'
    }]
  })

test('getCurrentOrder sends get request to server', () => {
  return getCurrentOrder()
    .then(res => {
      expect(res.isCurrentOrderActive).toBeTruthy()
    })
})
