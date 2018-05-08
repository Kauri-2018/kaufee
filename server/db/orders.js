const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCurrentOrder,
  getOrders,
  getUsers,
  orderExists,
  markCompleted
}

function getCurrentOrder (conn = connection) {
  return conn('orders')
    .join('order_items', 'orders.id', '=', 'order_items.order_id')
    .where('is_complete', '=', false)
    .select(
      'orders.id as orderId',
      'order_items.user_name as userName',
      'order_items.order_text as orderDetails',
      'order_items.id as orderItemId'
    )
}

function getOrders (conn = connection) {
  return conn('orders')
    // .join('order_items', 'orders.id', '=', 'order_items.order_id')
    // .select(
    //   'orders.id',
    //   'order_items.user_name',
    //   'order_items.order_text',
    //   'order_items.id as orderItemsId',
    //   'orders.date'
    // )
    .select()
}

function getUsers (conn = connection) {
  return conn('users')
    .select()
}

function orderExists (orderId, conn = connection) {
  return conn('orders')
    .where('id', '=', orderId)
    .first()
    .then(order => !!order)
}

function markCompleted (orderId, conn = connection) {
  return conn('orders')
    .where('id', '=', orderId)
    .update({is_complete: true})
}
