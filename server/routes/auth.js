const express = require('express')

const db = require('../db/users')
const hash = require('../auth/hash')

const router = express.Router()

router.use(express.json())

router.post('/login', login)
router.post('/register', register)

function login (req, res, next) {
  db.getCredsByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verifyUser(user.hash, req.body.password)
    })
    .then(() => invalidCredentials(res))
    // .then(isValid => {
    //   return isValid ? next() : invalidCredentials(res)
    // })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function register (req, res) {
  db.userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).json({message: 'User exists'})
      }
      const {username, name, password} = req.body
      db.createUser(username, name, password)
        .then(() => res.sendStatus(201))
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
