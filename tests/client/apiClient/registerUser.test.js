import nock from 'nock'

import {registerUser} from '../../../client/apiClient'

const userDetails = {
  id: 1,
  name: 'Janie',
  email: 'janie@test.com',
  token: 'this is the token'
}

nock('http://localhost')
  .post('/api/v1/auth/register')
  .reply(200, userDetails)

test('registerUsers sends post request to server', () => {
  return registerUser(userDetails)
    .then(res => {
      expect(res).toContain('this is the token')
    })
})
