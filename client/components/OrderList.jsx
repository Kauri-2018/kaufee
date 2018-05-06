import React from 'react'

import Order from './Order'

const OrderList = ({orders}) => (
  <ul>
    {orders.map(order =>
      <Order key={order.id}
        {...order}
      />
    )}
  </ul>
)

export default OrderList
