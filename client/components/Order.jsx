import React from 'react'

const Order = (props) => (
  <div className="order">
    <div>{props.name}</div>
    <div>{props.order}</div>
  </div>
)

export default Order