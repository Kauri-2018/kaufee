import nock from 'nock'

import {registerUser} from '../../../client/apiClient'

const userDetails = {
  "message": "Authentication successful.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w"
}

nock('http://localhost')
  .post('/api/v1/auth/register')
  .reply(200, userDetails)

test('registerUsers sends post request to server', () => {
  const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'
  return registerUser(userDetails)
    .then(res => {
      expect(res).toContain(expected)
    })
})
