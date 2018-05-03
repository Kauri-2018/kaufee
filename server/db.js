const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCurrentOrder
}

function getCurrentOrder (orderId, conn = connection) {
  return conn('orders')
    .join('order_items')
    .where('orders.id', 'order_items.order_id')
    .select(
      'orders.id',
      'order_items.user_name as userName',
      'order_items.order_text as orderDetails',
      'order_items.id as orderItemId'
    )
}
