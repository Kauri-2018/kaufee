import React from 'react'

const Order = (props) => (
  <li className="order">{props.userName}: {props.orderDetails}</li>
)

export default Order
