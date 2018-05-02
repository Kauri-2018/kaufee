exports.up = (knex, Promise) => {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.int('date').default(Date.now())
    table.boolean('is_complete')
    table.int('owner.id').foreign()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('orders')
}
