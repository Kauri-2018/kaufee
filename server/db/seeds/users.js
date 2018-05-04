
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, cred_id: 1, name: 'ZoeB', order_text: 'really cold milk'},
        {id: 2, cred_id: 2, name: 'Cam', order_text: 'Soy flat white'},
        {id: 3, cred_id: 3, name: 'Frank', order_text: 'Latte'}
      ])
    })
}
