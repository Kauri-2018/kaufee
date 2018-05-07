import React from 'react'

import Order from './Order'

const OrderList = ({orders}) => (
  <div className='orderlist'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ordered Item</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order =>
          <Order key={order.id}
            {...order}
          />
        )}
      </tbody>
    </table>
  </div>
)

export default OrderList
