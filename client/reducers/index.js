import {combineReducers} from 'redux'

import currentOrder from './currentOrder'
import userList from './userList'
import allOrders from './allOrders'

export default combineReducers({
  currentOrder,
  userList,
  allOrders
})
