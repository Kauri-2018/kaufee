import React from 'react'

import Order from './Order'

const OrderList = ({orders}) => (
  <div className='orderlist'>
    <table>
      <tr>
        <th>Name</th>
        <th>Drink</th>
        <th>Delete</th>
      </tr>
      {orders.map(order =>
        <Order key={order.id}
          {...order}
        />
      )}
    </table>
  </div>
)

export default OrderList
