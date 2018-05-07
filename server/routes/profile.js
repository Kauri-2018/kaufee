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

router.put('/', token.decode, (req, res) => {
  const userId = req.user.id
  const orderText = req.body.orderText
  db.updateUser(userId, orderText)
    .then(response => {
      res.json(response.body)
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})
