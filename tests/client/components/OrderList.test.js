import React from 'react'
import {render} from 'enzyme'

import OrderList from '../../../client/components/OrderList'

OrderList.prototype.componentDidMount = () => {}

test('<OrderList /> renders current order', () => {
  const orders = [{
    id: 2,
    name: 'Kale',
    order: 'flat white'
  }]
  const expected = 1

  const wrapper = render(<OrderList orders={orders} />)

  expect(wrapper.find('.order').length).toBe(expected)
})
