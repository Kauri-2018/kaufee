exports.up = (knex, Promise) => {
  return knex.schema.createTable('order_items', (table) => {
    table.increments('id').primary()
    table.int('user_id').references()
    table.int('order_id').references()
    table.string('order_text')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('order_items')
}
