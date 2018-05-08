import React from 'react'
import {render} from 'enzyme'

import OrderList from '../../../client/components/OrderList'

OrderList.prototype.componentDidMount = () => {}

test('<OrderList /> renders current order', () => {
  const items = [{
    id: 2,
    name: 'Kale',
    order: 'flat white'
  }]
  const expected = 1

  const wrapper = render(<OrderList items={items} />)

  expect(wrapper.find('.order-item').length).toBe(expected)
})
