import {combineReducers} from 'redux'

import currentOrder from './currentOrder'
import userList from './userList'
import newOrder from './newOrder'

export default combineReducers({
  currentOrder,
  userList,
  newOrder
})
