import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'
import {LOGOUT} from '../actions/logout'
import {UPDATE_USER} from '../actions/index'

const initState = {
  isFetching: false,
  isAuthenticated: false,
  errorMessage: '',
  user: null
}

export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
