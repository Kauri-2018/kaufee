import React from 'react'
import configureStore from 'redux-mock-store'
import {render} from 'enzyme'

import Home from '../../../client/components/Home'

Home.prototype.componentDidMount = () => {}

test('<Home /> renders current order', () => {
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
