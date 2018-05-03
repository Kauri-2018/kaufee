import {getCurrentOrder} from '../apiClient'

export const SHOW_CURRENTORDER = 'SHOW_CURRENTORDER'
export const SHOW_ERROR = 'SHOW_ERROR'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const requestCurrentOrder = () => {
  return dispatch => {
    return getCurrentOrder()
      .then(currentOrder => {
        dispatch(showCurrentOrder(currentOrder))
      })
  }
}
export function showCurrentOrder (currentOrder) {
  return {
    type: SHOW_CURRENTORDER,
    currentOrder
  }
}