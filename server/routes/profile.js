const express = require('express')

const db = require('../db/user')

const router = express.Router()

router.use(express.json())

module.exports = router

// profile get route

/*
router.get('/', (req, res) => {
  db.getProfile()
    .then(() => {
      res.json()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
*/

// profile post route
