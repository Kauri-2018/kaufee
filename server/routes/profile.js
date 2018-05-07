const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.use(express.json())

module.exports = router

// profile get route

router.get('/', token.decode, (req, res) => {
  const id = req.user.id
  db.getUser(id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// profile post route
