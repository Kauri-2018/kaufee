import nock from 'nock'

import {loginUser} from '../../../client/apiClient'

const userDetails = {
  id: 1,
  name: 'Janie',
  email: 'janie@test.com',
  token: 'this is the token'
}

nock('http://localhost')
  .post('/api/v1/auth/login')
  .reply(200, userDetails)

test('loginUser sends post request to server', () => {
  return loginUser(userDetails)
    .then(res => {
      expect(res).toContain('this is the token')
    })
})
