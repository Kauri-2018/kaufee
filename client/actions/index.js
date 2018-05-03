import {getOrders} from '../apiClient'

export const SHOW_ORDERS = 'SHOW_ORDERS'
export const SHOW_ERROR = 'SHOW_ERROR'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestOrders = () => {
  return dispatch => {
    return getOrders()
      .then(orders => {
        dispatch(showOrders(orders))
      })
  }
}
export function showOrders (orders) {
  return {
    type: SHOW_ORDERS,
    orders
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
