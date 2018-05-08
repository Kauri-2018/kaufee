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
  return request.get('/api/v1/users')
    .then(res => {
      return res.body
    })
}

export function getUser () {
  const token = localStorage.getItem('token')
  return request.get('/api/v1/profile')
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      return res.body
    })
}

export function updateUserProfile (user) {
  const token = localStorage.getItem('token')
  return request.put('/api/v1/profile')
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .then(res => {
      return res.body
    })
}

export function addOrderItem (userId, orderId) {
  const token = localStorage.getItem('token')
  const data = {
    userId,
    orderId
  }
  return request.post('/api/v1/current-order')
    .set('Authorization', `Bearer ${token}`)
    .send(data)
}

export function deleteItem (orderItemId) {
  const token = localStorage.getItem('token')
  return request.delete(`/api/v1/current-order/${orderItemId}`)
    .set('Authorization', `Bearer ${token}`)
}

export function loginUser (userDetails) {
  return request.post('/api/v1/auth/login')
    .send(userDetails)
    .then(res => res)
}

export function orderIsComplete (orderId) {
  const token = localStorage.getItem('token')
  const data = {
    orderId
  }
  return request.put('/api/v1/current-order/is-complete')
    .set('Authorization', `Bearer ${token}`)
    .send(data)
}

export function addOrder (userId) {
  const token = localStorage.getItem('token')
  return request.put('/api/v1/current-order/new-order')
    .set('Authorization', `Bearer ${token}`)
    .send({userId})
}
