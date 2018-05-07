import React from 'react'

/**
 * Outputs a person's ordered drink for an order
 * If onClickFn is defined it will be called when the delete button is pressed
 *
 * @param {{id, name, order, onClickFn}} props
 */
const Order = ({id, name, order, onClickFn}) => (
  <li className="order">{name}: {order} {onClickFn && (<div className='del-button' onClick={() => onClickFn(id)}>X</div>)}</li>
)

export default Order
