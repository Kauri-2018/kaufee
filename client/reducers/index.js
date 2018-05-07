import {combineReducers} from 'redux'

import currentOrder from './currentOrder'
import userList from './userList'
import auth from './auth'

export default combineReducers({
  currentOrder,
  userList,
  auth
})
