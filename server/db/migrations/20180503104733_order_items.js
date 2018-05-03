exports.up = (knex, Promise) => {
  return knex.schema.createTable('order_items', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.users_id')
    table.integer('order_id').references('orders.id')
    table.string('order_text')
    table.string('user_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('order_items')
}
