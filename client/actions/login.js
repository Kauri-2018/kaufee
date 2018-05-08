import {loginUser, getUser} from '../apiClient'
import {set} from '../utils/localStorage'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

function loginError (message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export function login (userDetails) {
  return dispatch => {
    dispatch(requestLogin())
    return loginUser(userDetails)
      .then(res => {
        set('token', res.body.token)
        getUser()
          .then(user => {
            dispatch(receiveLogin(user))
          })
      })
      .catch(err => {
        dispatch(loginError(err.response.body.message))
        return Promise.reject(err.response.body.message)
      })
  }
}
