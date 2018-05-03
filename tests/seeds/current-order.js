exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      return knex('orders').insert([
        {
          id: 1,
          date: 1524718675000,
          is_complete: false,
          owner_id: 2
        }
      ])
    })
}

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
