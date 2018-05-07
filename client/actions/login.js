import {loginUser, getUser} from '../apiClient'

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

function receiveLogin (user) {
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
        if (!res.ok) {
          dispatch(loginError(res.body.message))
          return Promise.reject(res.body.message)
        } else {
          getUser()
            .then(user => {
              dispatch(receiveLogin(user))
            })
        }
      })
  }
}
