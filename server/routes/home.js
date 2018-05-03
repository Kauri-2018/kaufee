const express = require('express')

const db = require('../db/orders')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  const orderId = 1 // TODO: read from request
  db.getCurrentOrder(orderId)
    .then(items => {
      const currentOrder = {
        id: items[0].orderId,
        items: items.map(item => ({
          orderId: item.orderId,
          userName: item.userName,
          orderItemId: item.orderItemId,
          orderDetails: item.orderDetails
        }))
      }
      res.json(currentOrder)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
