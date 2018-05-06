import {getUsers} from '../../../client/apiClient'

const nock = require('nock')

nock('http://localhost')
  .get('/api/v1/users')
  .reply(200, {
    message: 'Test successful'
  })

test('getUsers sends get request to server', () => {
  return getUsers()
    .then(res => {
      expect(res).toBeTruthy()
    })
})
