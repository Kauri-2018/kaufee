exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert([
        {
          id: 1,
          is_complete: true,
          owner_id: 1
        },
        {
          id: 2,
          is_complete: false,
          owner_id: 1
        }
      ])
    })
}
