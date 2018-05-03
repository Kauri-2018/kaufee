exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      return knex('orders').insert([
        {id: 1}
      ])
    })
}