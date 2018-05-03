const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')
const router = express.Router()

router.use(express.json())

router.post('/register', register, token.issue)

function register (req, res, next) {
  db.userExists(req.body.username)
    .then(exists => {
      if(exists) {
        return res.status(400).json({message: 'User exists'})
      }
      const {username, name, password} = req.body
      db.createUser(username, name, password)
        .then(() => next())
        .then(() => res.sendStatus(201))
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

module.exports = router
