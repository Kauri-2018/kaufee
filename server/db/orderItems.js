const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const orders = require('./orders')
const users = require('./users')

module.exports = {
  addToOrder
}

function addToOrder (userId, orderId, conn = connection) {
  return orders.orderExists(orderId)
    .then(orderExists => {
      if (!orderExists) {
        return new Error('Order does not exist.')
      }
      return users.getUser(userId)
        .then(user => {
          if (!user) {
            return new Error('User does not exist.')
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
}
