import React from 'react'
import configureStore from 'redux-mock-store'
import {configure, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './setup-env'
import Home from '../client/components/Home'

configure({adapter: new Adapter()})

Home.prototype.componentDidMount = () => {}

test('<Home /> renders current order', () => {
  const initialState = {
    orders: [{
      id: 1,
      name: 'Kale',
      order: 'flat white'
    }]
  }
  const store = configureStore()(initialState)
  const expected = 'Kale'

  const wrapper = render(<Home store={store} />)

  expect(wrapper.text()).toMatch(expected)
})
