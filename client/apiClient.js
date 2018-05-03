import request from 'superagent'

export const getOrders = () => {
  return request.get('/api/v1/orders')
    .then(res => {
      return res.body
    })
}
