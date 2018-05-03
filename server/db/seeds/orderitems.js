exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('order_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_items').insert([
        {
          id: 1,
          user_id: 1,
          order_id: 1,
          order_text: 'flat white',
          user_name: 'test person 1'
        },
        {
          id: 2,
          user_id: 2,
          order_id: 1,
          order_text: 'latte',
          user_name: 'test person 2'
        },
        {
          id: 3,
          user_id: 1,
          order_id: 2,
          order_text: 'medium flat white',
          user_name: 'test person 1'
        },
        {
          id: 4,
          user_id: 2,
          order_id: 2,
          order_text: 'medium latte',
          user_name: 'test person 2'
        }
      ])
    })
}
