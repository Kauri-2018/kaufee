
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(generateTestPeople(5))
    })
}

function generateTestPeople (numberOfPeople) {
  const people = []
  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      id: i,
      cred_id: i,
      name: `Test Person ${i}`,
      order_text: `drink ${i}`
    })
  }
  return people
}
