import { registerUser } from '../../../client/apiClient'

const nock = require('nock')

const userDetails = {
  id: 1,
  name: 'Janie',
  email: 'janie@test.com',
  token: 'thisisthetoken'
}

nock('http://localhost')
  .post('/api/v1/auth/register')
  .reply(200, userDetails)

test('registerUsers sends post request to server', () => {
  return registerUser(userDetails)
    .then(res => {
      expect(res).toContain('thisisthetoken')
    })
})
