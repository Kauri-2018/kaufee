const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const users = require('./users')

function getCurrentOrderItems (conn = connection) {
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

function addNewOrder (ownerId, conn = connection) {
  return conn('orders')
    .insert({
      is_complete: false,
      owner_id: ownerId
    })
    .then(orderIds => {
      return conn('orders')
        .where('id', '=', orderIds[0])
        .select()
        .first()
        .then(order => {
          addToOrder(ownerId, orderIds[0], conn)
        })
    })
}

function addToOrder (userId, orderId, conn = connection) {
  return orderExists(orderId, conn)
    .then(orderExists => {
      if (!orderExists) {
        throw new Error('Order does not exist.')
      }
    })
    .then(() => {
      return users.getUser(userId, conn)
        .then(user => {
          if (!user) {
            throw new Error('User does not exist.')
          }
          return conn('order_items')
            .where({
              'user_id': userId,
              'order_id': orderId
            })
            .select()
            .first()
            .then(existingUser => {
              if (existingUser) {
                throw new Error('User already exists in order')
              }
              return conn('order_items')
                .insert({
                  user_id: user.userId,
                  user_name: user.name,
                  order_text: user.orderText,
                  order_id: orderId
                })
            })
        })
    })
    .catch(err => {
      console.log(err.message)
    })
}

function deleteOrderItem (itemId, conn = connection) {
  return conn('order_items')
    .where('id', '=', itemId)
    .del()
}

module.exports = {
  getCurrentOrderItems,
  getOrders,
  getUsers,
  orderExists,
  markCompleted,
  addNewOrder,
  addToOrder,
  deleteOrderItem
}
