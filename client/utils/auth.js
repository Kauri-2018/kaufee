import decode from 'jwt-decode'
import {get, set} from './localStorage'

export function decodedToken (token) {
  set('token', token)
  return decode(token)
}
