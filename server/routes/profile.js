const express = require('express')

const db = require('../db/users')
const token = require('../auth/token')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', token.decode, (req, res) => {
  // token.decode -- now req.user will contain the contents of our token
  db.getUserByCredId(req.user.id)
    .then(credsId => res.json(credsId))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/', token.decode, (req, res) => {
  db.updateUser(req.body)
    .then(() => db.getUser(req.body.userId))
    .then((user) => res.json(user))
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})
