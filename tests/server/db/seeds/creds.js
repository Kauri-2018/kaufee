const {generate} = require('../../../../server/auth/hash')

exports.seed = (knex, Promise) => {
  return knex('creds').del()
    .then(() => {
      return knex('creds').insert([
        {
          id: 20,
          username: 'cam',
          hash: generate('cam')
        }, {
          id: 21,
          username: 'don',
          hash: generate('don')
        }, {
          id: 22,
          username: 'emily',
          hash: generate('emily')
        }, {
          id: 23,
          username: 'frank',
          hash: generate('frank')
        }, {
          id: 24,
          username: 'kale',
          hash: generate('kale')
        }, {
          id: 25,
          username: 'mayur',
          hash: generate('mayur')
        }, {
          id: 26,
          username: 'sarah',
          hash: generate('sarah')
        }, {
          id: 27,
          username: 'tony',
          hash: generate('tony')
        }, {
          id: 28,
          username: 'tori',
          hash: generate('tori')
        }, {
          id: 29,
          username: 'zaeburn',
          hash: generate('zaeburn')
        }, {
          id: 30,
          username: 'zoeb',
          hash: generate('zoeb')
        }, {
          id: 31,
          username: 'zoel',
          hash: generate('zoel')
        }
      ])
    })
}
