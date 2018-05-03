exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('order_items').del()
    .then(() => {
      return knex('order_items').insert([
        {
          id: 1,
          user_id: 1,
          user_name: 'jane',
          order_text: 'flat white',
          order_id: 1
        }
      ])
    })
}
