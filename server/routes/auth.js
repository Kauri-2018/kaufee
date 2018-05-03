const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.use(express.json())

router.post('/register', register)

function register (req, res) {
  db.userExists(req.body.username)
    .then(exists => {
      if(exists) {
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

module.exports = router
