import {set} from '../utils/localStorage'

export const LOGOUT = 'LOGOUT'

export function logout () {
  set('token', null)
  return {
    type: LOGOUT
  }
}
