import {getOrders} from '../apiClient'

export function showOrders (orders) {
  getOrders()
  return {
    type: 'SHOW_ORDERS',
    orders: orders.map((order, id) => ({
      id: id + 1,
      order: order.order,
      name: order.name
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
