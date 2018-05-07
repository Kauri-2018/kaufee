import {set} from '../utils/localStorage'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function requestLogout () {
  return {
    type: LOGOUT_REQUEST
  }
}

function receiveLogout () {
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticated: false,
    user: ''
  }
}
export function logoutUser () {
  return dispatch => {
    dispatch(requestLogout())
    set('token', null)
    dispatch(receiveLogout())
  }
}
