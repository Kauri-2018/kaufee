import React from 'react'

/**
 * Outputs a person's ordered drink for an order
 * If onClickFn is defined it will be called when the delete button is pressed
 *
 * @param {{id, name, order, onClickFn}} props
 */
const Order = ({id, name, order, onClickFn}) => (
  <li className="order-item">
    <span className='order-item-line flex-horizontal'>
      {name}: {order}
      {onClickFn && (<div className='del-button' onClick={() => onClickFn(id)}>X</div>)}
    </span>
  </li>
)

export default Order
