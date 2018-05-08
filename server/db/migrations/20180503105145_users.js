exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.integer('cred_id').references('creds.id')
    table.string('name')
    table.text('order_text')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('users')
}
