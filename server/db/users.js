const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  userExists: () => Promise.resolve(false),
  createUser: () => Promise.resolve(),
  getUser
}

function getUser (userId, conn = connection) {
  return conn('users') // Should this be part of the db/users module?
    .where('id', '=', userId)
    .select(
      'id as userId',
      'name',
      'order_text as orderText'
    )
    .first()
}
