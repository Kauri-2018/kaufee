const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const orders = require('./orders')
const users = require('./users')

module.exports = {
  addToOrder,
  deleteOrderItem
}

function addToOrder (userId, orderId, conn = connection) {
  return orders.orderExists(orderId, conn)
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
}

function deleteOrderItem (itemId, conn = connection) {
  return conn('order_items')
    .where('id', '=', itemId)
    .del()
}
