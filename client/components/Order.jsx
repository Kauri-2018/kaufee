import React from 'react'

/**
 * Outputs a person's ordered drink for an order
 * If onClickFn is defined it will be called when the delete button is pressed
 * If no onClickFn is given then the delete button will not show
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
    {onClickFn && <td className='button-complete-fn-col' onClick={() => onClickFn(id)} >
      <button className={'button-complete-fn' + (isComplete === 1 ? ' completed' : '')}>X</button>
    </td>}
  </tr>
)

export default Order
