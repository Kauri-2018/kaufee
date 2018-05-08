import {
  getCurrentOrder,
  getUsers,
  addOrderItem,
  orderIsComplete,
  deleteItem
} from '../apiClient'

export const SHOW_CURRENT_ORDER = 'SHOW_CURRENT_ORDER'
export const SHOW_USERS = 'SHOW_USERS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const UPDATE_USER = 'UPDATE_USER'

export function updateUser (user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export function deleteItemById (id) {
  return dispatch => {
    return deleteItem(id)
      .then(() => {
        return getCurrentOrder()
          .then(currentOrder => {
            dispatch(showCurrentOrder(currentOrder))
          })
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function requestCurrentOrder () {
  return dispatch => {
    return getCurrentOrder()
      .then(currentOrder => {
        dispatch(showCurrentOrder(currentOrder))
        return currentOrder
      })
  }
}

export function showCurrentOrder (currentOrder) {
  return {
    type: SHOW_CURRENT_ORDER,
    currentOrder
  }
}

export function requestUsers () {
  return dispatch => {
    return getUsers()
      .then(userList => {
        dispatch(showUsers(userList))
      })
  }
}

export function showUsers (userList) {
  return {
    type: SHOW_USERS,
    userList
  }
}

export function updateOrder (userId, orderId) {
  return dispatch => {
    return addOrderItem(userId, orderId)
      .then(() => {
        dispatch(requestCurrentOrder())
      })
  }
}

export function orderComplete (orderId) {
  return dispatch => {
    return orderIsComplete(orderId)
      .then(() => {
        dispatch(requestCurrentOrder())
      })
  }
}
