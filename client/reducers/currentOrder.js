const currentOrder = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ORDERS':
      return action.currentOrder

    default:
      return state
  }
}

export default currentOrder
