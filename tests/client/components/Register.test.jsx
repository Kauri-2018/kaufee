import React from 'react'
import {shallow} from 'enzyme'

import Register from '../../../client/components/Register.jsx'

test('Register />', () => {
  const expected = 5
  const wrapper = shallow(<Register />)
  expect(wrapper.children().length).toBe(expected)
})
