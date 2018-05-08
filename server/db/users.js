const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const {generate} = require('../auth/hash')

function getCredsByName (username, db = connection) {
  return db('creds')
    .select()
    .whereRaw('LOWER(username) LIKE ?', username.toLowerCase())
    .first()
}

function userExists (username, db = connection) {
  return db('creds')
    .whereRaw('LOWER(username) LIKE ?', username.toLowerCase())
    .first()
    .then(user => !!user)
}

function createUser (username, name, password, db = connection) {
  const hash = generate(password)
  return db('creds')
    .insert({
      username,
      hash
    })
    .then((id) => {
      return db('users')
        .insert({
          cred_id: id[0],
          name,
          order_text: ''
        })
    })
}

function getUser (userId, conn = connection) {
  return conn('users')
    .where('id', '=', userId)
    .select(
      'id as userId',
      'cred_id as credId',
      'name',
      'order_text as orderText'
    )
    .first()
}

function getUserByCredId (credsId, conn = connection) {
  return conn('users')
    .where('cred_id', '=', credsId)
    .select(
      'id as userId',
      'cred_id as credId',
      'name',
      'order_text as orderText'
    )
    .first()
}
function updateUser (user, conn = connection) {
  return conn('users')
    .where('id', '=', user.userId)
    .update({
      'id': user.userId,
      'cred_id': user.credId,
      'name': user.name,
      'order_text': user.orderText
    })
}

module.exports = {
  getCredsByName,
  getUserByCredId,
  userExists,
  createUser,
  getUser,
  updateUser
}
