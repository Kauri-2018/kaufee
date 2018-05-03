import React from 'react'
// import configureStore from 'redux-mock-store'
// import {render} from 'enzyme'

import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import requestCurrentOrder from '../../../client/actions'
import showCurrentOrder from '../../../client/actions'

// export function requestCurrentOrder () {
//   return dispatch => {
//     return getCurrentOrder()
//       .then(currentOrder => {
//         dispatch(showCurrentOrder(currentOrder))
//       })
//   }
// }

requestCurrentOrder.prototype.componentDidMount = () => {}

test('requestCurrentOrder returns current order', () => {
  const initialState = {
    currentOrder: {
      id: 1,
      items: [{
        id: 2,
        name: 'Kale',
        order: 'flat white'
      }]
    }
  }
  const store = configureStore()(initialState)
  const expected = 1

  const wrapper = render(<Home store={store} />)

  expect(wrapper.find('.order').length).toBe(expected)
})

// export function showCurrentOrder (currentOrder) {
//   return {
//     type: SHOW_CURRENT_ORDER,
//     currentOrder
//   }
// }

showCurrentOrder.prototype.componentDidMount = () => {}

test('requestCurrentOrder returns current order', () => {
  const initialState = {
    currentOrder: {
      id: 1,
      items: [{
        id: 2,
        name: 'Kale',
        order: 'flat white'
      }]
    }
  }
  const store = configureStore()(initialState)
  const expected = 1

  const wrapper = render(<Home store={store} />)

  expect(wrapper.find('.order').length).toBe(expected)
})
