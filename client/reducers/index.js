import {combineReducers} from 'redux'

import currentOrder from './currentOrder'
import userList from './userList'
import allOrders from './allOrders'
import auth from './auth'

export default combineReducers({
  currentOrder,
  userList,
  allOrders,
  auth
})
