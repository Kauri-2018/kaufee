const {generate} = require('../../server/auth/hash')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('creds').del()
    .then(function () {
      // Inserts seed entries
      return knex('creds').insert(generateTestCreds(5))
    })
}

function generateTestCreds (numberOfPeople) {
  const people = []
  for (let i = 0; i < numberOfPeople; i++) {
    people.push({
      id: i,
      username: i,
      hash: generate(`Test Person ${i}`)
    })
  }
  return people
}
