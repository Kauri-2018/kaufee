import request from 'superagent'

export const getCurrentOrder = () => {
  return request.get('/api/v1/CurrentOrder')
    .then(res => {
      return res.body
    })
}

export function registerUser (userDetails) {
  // Request new user
  return request.post('/register')
    .send(userDetails)
    // Then return the token that was received
    .then(res => res.body.token)
}
