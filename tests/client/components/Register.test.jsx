import React from 'react'
import {render} from 'enzyme'
import createStore from 'redux-mock-store'

import Register from '../../../client/components/Register.jsx'

test('Register />', () => {
  const expected = 5
  const store = createStore()({})
  const wrapper = render(<Register store={store} />)
  expect(wrapper.children().length).toBe(expected)
})
