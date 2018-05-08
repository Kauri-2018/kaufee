exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('order_items').del()
    .then(() => {
      // Inserts seed entries
      return knex('order_items').insert([
        {
          id: 1,
          user_id: 1,
          order_id: 1,
          order_text: 'flat white',
          user_name: 'don'
        },
        {
          id: 2,
          user_id: 2,
          order_id: 1,
          order_text: 'latte',
          user_name: 'emily'
        },
        {
          id: 3,
          user_id: 3,
          order_id: 1,
          order_text: 'long black',
          user_name: 'tony'
        },
        {
          id: 4,
          user_id: 1,
          order_id: 2,
          order_text: 'flat white',
          user_name: 'don'
        },
        {
          id: 5,
          user_id: 2,
          order_id: 2,
          order_text: 'latte',
          user_name: 'emily'
        },
        {
          id: 6,
          user_id: 3,
          order_id: 2,
          order_text: 'long black',
          user_name: 'tony'
        }
      ])
    })
}
