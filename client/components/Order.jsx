import React from 'react'

const Order = ({name, order}) => (
  <tr>
    <td>{name}</td>
    <td>{order}</td>
    <td onClick={null/* Add extra column for delete based on props.onClickFn */}><button>X</button></td>
  </tr>
)

export default Order
