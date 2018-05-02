const orders = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ORDERS':
      return action.orders

    default:
      return state
  }
}

export default orders