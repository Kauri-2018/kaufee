import React from 'react'

import Order from './Order'

const OrderList = ({orders, onClickFn}) => (
  <div className='orderlist'>
    <table>
      <thead>
        <tr>
          <th>col 1</th>
          <th>col 2</th>
          <th>col 3</th>
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
