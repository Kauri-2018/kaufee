import React from 'react'

/**
 * Outputs a person's ordered drink for an order
 * If onClickFn is defined it will be called when the delete button is pressed
 *
 * @param {{id, name, order, onClickFn}} props
 */
const Order = ({id, name, order, onClickFn}) => (
  <tr>
    <td>{name}</td>
    <td>{order}</td>
    {onClickFn && (<td onClick={() => onClickFn(id)}><button>X</button></td>)}
  </tr>
)

export default Order
