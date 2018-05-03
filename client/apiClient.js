import request from 'superagent'

export const getCurrentOrder = () => {
  return request.get('/api/v1/CurrentOrder')
    .then(res => {
      return res.body
    })
}
