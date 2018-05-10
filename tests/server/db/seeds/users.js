exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          cred_id: 20,
          name: 'Cam',
          order_text: 'Flat white'
        }, {
          id: 2,
          cred_id: 21,
          name: 'Don',
          order_text: 'Almond flat white'
        }, {
          id: 3,
          cred_id: 22,
          name: 'Emily',
          order_text: 'Latte'
        }, {
          id: 4,
          cred_id: 23,
          name: 'Frank',
          order_text: 'Latte'
        }, {
          id: 5,
          cred_id: 24,
          name: 'Kale',
          order_text: 'Flat white'
        }, {
          id: 6,
          cred_id: 25,
          name: 'Mayur',
          order_text: 'Flat white'
        }, {
          id: 7,
          cred_id: 26,
          name: 'Sarah',
          order_text: 'Flat white'
        }, {
          id: 8,
          cred_id: 27,
          name: 'Tony',
          order_text: 'Long black'
        }, {
          id: 9,
          cred_id: 28,
          name: 'Tori',
          order_text: 'Latte'
        }, {
          id: 10,
          cred_id: 29,
          name: 'Zaeburn',
          order_text: 'Mochaccino'
        }, {
          id: 11,
          cred_id: 30,
          name: 'Zoe B.',
          order_text: 'Hot chocolate'
        }, {
          id: 12,
          cred_id: 31,
          name: 'Zoe L.',
          order_text: 'Flat white'
        }
      ])
    })
}
