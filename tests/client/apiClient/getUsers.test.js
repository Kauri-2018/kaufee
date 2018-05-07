import nock from 'nock'

import {getUsers} from '../../../client/apiClient'

nock('http://localhost')
  .get('/api/v1/users')
  .reply(200, {
    id: 1,
    cred_id: 24,
    name: 'Zoe',
    order_text: 'flat white'
  })

test('getUsers sends get request to server', () => {
  return getUsers()
    .then(res => {
      expect(res).toBeTruthy()
    })
})
