import request from 'superagent'

export function getCurrentOrder () {
  return request.get('/api/v1/current-order')
    .then(res => {
      return res.body
    })
}

export function registerUser (userDetails) {
  return request.post('/api/v1/auth/register')
    .send(userDetails)
    .then(res => res.body.token)
}

export function getUsers () {
  return request.get('/api/v1/current-order/getusers')
    .then(res => {
      return res.body
    })
}

export function postUpdateOrder (userId, orderId, callback) {
  return request.post(`/api/v1/current-order/order-item/${orderId}/${userId}`)
    .then(callback)
}

export function loginUser (userDetails) {
  return request.post('/api/v1/auth/login')
    .send(userDetails)
    .then(res => res.body.token)
}
