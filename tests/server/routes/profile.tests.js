const request = require('supertest')

// jest mock api data

/*
jest.mock('../../../server/db/users', () => ({
  // Profile route to mock
  get: (id) => Promise.resolve([
    {
      // TODO return promise as object
    }
  ])
}))
*/

const server = require('../../../server/server')

// get route test

// put route test
