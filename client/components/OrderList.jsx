import React from 'react'

import Order from './Order'

const OrderList = ({orders, onClickFn}) => (
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
          <Order
            key={order.id}
            onClickFn = {onClickFn}
            {...order}
          />
        )}
      </tbody>
    </table>
  </div>
)

export default OrderList
