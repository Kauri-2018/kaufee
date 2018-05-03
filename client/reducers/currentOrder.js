const currentOrder = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_CURRENT_ORDER':
      return action.currentOrder

    default:
      return state
  }
}

export default currentOrder
