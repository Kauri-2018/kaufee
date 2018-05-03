import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './setup-env'
import Home from '../client/components/Home'

configure({adapter: new Adapter()})

test('<Home />', () => {
  const expected = 'hello world'
  const wrapper = shallow(<Home />)
  expect(wrapper.text()).toBe(expected)
})
