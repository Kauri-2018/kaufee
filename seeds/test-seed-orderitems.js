
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
          order_text: 'flat white'
        },
        {
          id: 2,
          user_id: 1,
          order_id: 2,
          order_text: 'latte'
        }
      ])
    })
}
