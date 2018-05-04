const express = require('express')

const db = require('../db/orders')
const orderItems = require('../db/orderItems')

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
          id: item.orderItemId,
          name: item.userName,
          order: item.orderDetails
        }))
      }
      res.json(currentOrder)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/order-item/:orderId/:userId', (req, res) => {
  const orderId = req.params.orderId
  const userId = req.params.userId
  orderItems.getOrders(userId, orderId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
