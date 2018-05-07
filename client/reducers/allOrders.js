const initialAllOrders = []

export default function (allOrders = initialAllOrders, action) {
  switch (action.type) {
    case 'SHOW_ALL_ORDER':
      return action.allOrders

    default:
      return allOrders
  }
}
