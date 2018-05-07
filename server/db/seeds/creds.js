const {generate} = require('../../auth/hash')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('creds').del()
    .then(() => {
      // Inserts seed entries
      return knex('creds').insert([
        {
          id: 20,
          username: 'don',
          hash: generate('don')
        }, {
          id: 21,
          username: 'emily',
          hash: generate('emily')
        }, {
          id: 22,
          username: 'tony',
          hash: generate('tony')
        }, {
          id: 23,
          username: 'zoe',
          hash: generate('zoe')
        }, {
          id: 24,
          username: 'kale',
          hash: generate('kake')
        }, {
          id: 25,
          username: 'zaeburn',
          hash: generate('zaeburn')
        }, {
          id: 26,
          username: 'tori',
          hash: generate('tori')
        }
      ])
    })
}
