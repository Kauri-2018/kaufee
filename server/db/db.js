const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCurrentOrder,
  getOrders
}

function getCurrentOrder (orderId, conn = connection) {
  return conn('orders')
    .join('order_items', 'orders.id', '=', 'order_items.order_id')
    .where('orders.id', '=', orderId)
    .select(
      'orders.id as orderId',
      'order_items.user_name as userName',
      'order_items.order_text as orderDetails',
      'order_items.id as orderItemId'
    )
}

function getOrders (conn = connection) {
  return conn('orders')
    .select()
}
