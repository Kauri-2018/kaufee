exports.up = (knex, Promise) => {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.integer('date').default(Date.now())
    table.boolean('is_complete').default(false)
    table.integer('owner_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('orders')
}
