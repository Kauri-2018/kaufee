import {generate} from '../../auth/hash'

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('creds').del()
    .then(() => {
      // Inserts seed entries
      return knex('creds').insert([
        {
          id: 20,
          username: 'Don',
          hash: generate(this.username + 'password')
        }, {
          id: 21,
          username: 'Emily',
          hash: generate(this.username + 'password')
        }, {
          id: 22,
          username: 'Tony',
          hash: generate(this.username + 'password')
        }, {
          id: 23,
          username: 'Zoe',
          hash: generate(this.username + 'password')
        }, {
          id: 24,
          username: 'Kale',
          hash: generate(this.username + 'password')
        }, {
          id: 25,
          username: 'Zaeburn',
          hash: generate(this.username + 'password')
        }, {
          id: 26,
          username: 'Tori',
          hash: generate(this.username + 'password')
        }
      ])
    })
}
