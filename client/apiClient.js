import request from 'superagent'

export const getCurrentOrder = () => {
  return request.get('/api/v1/CurrentOrder')
    .then(res => {
      return res.body
    })
}
    
export function registerUser (userDetails) {
  // Request new user
  // Returns a promise with new user id and token
}
