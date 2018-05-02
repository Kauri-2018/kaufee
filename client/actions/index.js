import request from 'superagent'

export const getOrders = () => {
  return (dispatch) => {
    request.get('/api/v1/orders')
      .then(res => {
        dispatch(showOrders(res.body.orders))
      })
  }
}

export function showOrders (orders) {
  return {
    type: 'SHOW_ORDERS',
    orders: orders.map((order, id) => ({
      id: id + 1,
      order
    }))
  }
}

// export const addOrder = (order) => {
//   return (dispatch) => {
//     request.post('/api/v1/orders')
//       .send({order})
//       .then(() => {
//         dispatch(getOrders())
//       })
//   }
// }