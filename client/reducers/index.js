import {combineReducers} from 'redux'

import currentOrder from './currentOrder'
import userList from './userList'

export default combineReducers({
  currentOrder,
  userList
})
