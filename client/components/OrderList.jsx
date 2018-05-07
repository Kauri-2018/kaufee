import React from 'react'

import Order from './Order'

const OrderList = ({items = [], functionMessage, onClickFn}) => (
  <div className='orderlist'>
    <table className='row'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ordered Item</th>
          <th>{functionMessage}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>
          <Order
            key={item.id}
            onClickFn = {onClickFn}
            {...item}
          />
        )}
      </tbody>
    </table>
  </div>
)

export default OrderList
