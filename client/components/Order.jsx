import React from 'react'

/**
 * Outputs a person's ordered drink for an order
 * If onClickFn is defined it will be called when the delete button is pressed
 *
 * @param {{id, name, order, isComplete, onClickFn}} props
 */
const Order = ({id, name, order, isComplete, onClickFn}) => (
  <tr
    className={
      'order-item' + (!isComplete ? ''
        : isComplete > 0
          ? ' completed'
          : ' not-completed')
    }>
    <td>{name}</td>
    <td>{order}</td>
    {onClickFn &&
      (!isComplete || isComplete === -1) &&
      (<td onClick={() => onClickFn(id)}><button>X</button></td>)}
  </tr>
)

export default Order
