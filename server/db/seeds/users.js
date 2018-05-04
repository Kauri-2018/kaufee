
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          cred_id: 20,
          name: 'Don',
          order_text: 'flat white'
        },
        {
          id: 2,
          cred_id: 21,
          name: 'Emily',
          order_text: 'latte'
        },
        {
          id: 3,
          cred_id: 22,
          name: 'Tony',
          order_text: 'long black'
        },
        {
          id: 4,
          cred_id: 23,
          name: 'Zoe',
          order_text: 'hot chocolate'
        },
        {
          id: 5,
          cred_id: 24,
          name: 'Kale',
          order_text: 'flat white'
        },
        {
          id: 6,
          cred_id: 25,
          name: 'Zaeburn',
          order_text: 'mochaccino'
        },
        {
          id: 7,
          cred_id: 26,
          name: 'Tori',
          order_text: 'latte'
        }
      ])
    })
}
