const express = require('express')

const router = express.Router()
const db = require('../db/db')

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  const orderId = 1
  db.getCurrentOrder(orderId)
    .then(order => {
      res.json(order)
    })
})
