const initialCurrentOrder = {isCurrentOrderActive: false}

export default function (currentOrder = initialCurrentOrder, action) {
  switch (action.type) {
    case 'SHOW_NEW_ORDER':
      return action.isCurrentOrderActive
    default:
      return initialCurrentOrder
  }
}
