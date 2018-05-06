// import {getCurrentOrder} from '../../client/apiClient'

const nock = require('nock')

const currentOrderNock = nock('http://localhost:3000')
  .get('/api/v1/current-order')
  .reply(200, {
    message: 'Test successful'
  })

test('getCurrentOrder sends request to server', () => {
  const expected = 200
  return currentOrderNock.done()
    .then(res => {
      expect(res.status).toBe(expected)
    })
})
