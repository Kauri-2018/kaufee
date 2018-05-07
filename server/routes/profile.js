const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', token.decode, (req, res) => {
  // token.decode -- now req.user will contain the contents of our token
  db.getUser(req.user.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// profile post route
