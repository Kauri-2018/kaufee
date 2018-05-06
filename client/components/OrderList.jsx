import React from 'react'

import Order from './Order'

const OrderList = ({orders}) => (
  <div className='orderlist'>
    <ul>
      {orders.map(order =>
        <Order key={order.id}
          {...order}
        />
      )}
    </ul>
  </div>
)

export default OrderList
