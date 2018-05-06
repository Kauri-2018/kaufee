import {registerUser} from '../../../client/apiClient'

const nock = require('nock')

nock('http://localhost')
  .post('/api/v1/auth/register')
  .reply(200, {
    name: 'Janie',
    email: 'janie@test.com'
  })

test('registerUsers sends post request to server', () => {
  return registerUser({
    name: 'Janie',
    email: 'janie@test.com'
  })
    .then(res => {
      expect(res).toBeTruthy()
    })
})
