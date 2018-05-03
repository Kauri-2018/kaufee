import request from 'superagent'

export function registerUser (userDetails) {
  // Request new user
  request.post('/register')
    .send(userDetails)
    // Then return the token that was received
    .then(res => res.body.token)
    .catch(err => {
      // TODO catch error properly
      console.error(err.message)
    })
}
