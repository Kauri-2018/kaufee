const request = require('supertest')

// jest mock api data

jest.mock('../../../server/db/users', () => ({
  // Profile route to mock
  getUser: (id) => Promise.resolve([
    {
      userID: id,
      credId: 25,
      name: 'Zaeburn',
      orderText: 'mochachino'
    }
  ])
}))

const server = require('../../../server/server')

// get route test
test('get /api/v1/profile returns user profile', () => {

  // Arrange

  // Act

  // Assert

})

// put route test
