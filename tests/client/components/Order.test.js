import React from 'react'
import {shallow, mount} from 'enzyme'

import Order from '../../../client/components/Order'

// Create a table to sit the order in so it doesn't complain
// about having a table row not inside a table
const testTable = order => (
  <table>
    <tbody>
      <Order {...order} />
    </tbody>
  </table>
)

test('<Order /> onClickFn is called on button click', done => {
  const testFn = () => {
    expect(true).toBeTruthy()
    done()
  }

  const order = {
    id: 2,
    name: 'Kale',
    order: 'flat white',
    isComplete: false,
    onClickFn: testFn
  }

  const wrapper = mount(testTable(order))
  const button = wrapper.find('button')
  button.simulate('click')
})

test('<Order /> no button when no onClickFn passed as prop', () => {
  const order = {
    id: 2,
    name: 'Kale',
    order: 'flat white',
    isComplete: false
  }

  const wrapper = shallow(testTable(order))
  expect(wrapper.find('button').length).toBe(0)
})
