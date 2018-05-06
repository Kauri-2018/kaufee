exports.up = (knex, Promise) => {
  return knex.schema.createTable('creds', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('creds')
}
