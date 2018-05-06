import { getUsers } from '../../../client/apiClient'

const nock = require('nock')

const baseUrl = 'http://localhost'
const path = '/api/v1/users'

nock(baseUrl)
  .get(path)
  .reply(200, 'complete')

test('getUsers sends get request to server', () => {
  return getUsers()
    .then(res => {
      expect(res).toBeTruthy()
    })
})
