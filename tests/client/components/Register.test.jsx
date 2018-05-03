import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import '../set-up-dom'
import Register from '../../../client/components/Register.jsx'

configure({adapter: new Adapter()})

test('Register />', () => {
  const expected = 4
  const wrapper = shallow(<Register />)
  expect(wrapper.children().length).toBe(expected)
})
