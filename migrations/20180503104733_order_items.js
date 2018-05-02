exports.up = (knex, Promise) => {
  return knex.schema.createTable('order_items', (table) => {
    table.increments('id').primary()
    table.int('user_id').foreign()
    table.int('order_id').foreign()
    table.string('order_text')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('order_items')
}
