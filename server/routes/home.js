const express = require('express')

var _ = require('lodash')

const token = require('../auth/token')
const userExists = require('../db/users').userExists

const db = require('../db/orders')
const orderItems = require('../db/orderItems')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  db.getCurrentOrder()
    .then(items => {
      if (!items.length) {
        return res.json({isCurrentOrderActive: false})
      }
      const currentOrder = {
        id: items[0].orderId,
        items: items.map(item => ({
          id: item.orderItemId,
          name: item.userName,
          order: item.orderDetails,
          isCurrentOrderActive: true
        }))
      }

      res.json(currentOrder)
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.post('/', token.decode, (req, res) => {
  const orderId = req.body.orderId
  const userId = req.body.userId

  userExists(req.user.username)
    .then(userExists => {
      if (userExists) {
        return orderItems.addToOrder(userId, orderId)
          .then(() => {
            res.sendStatus(200)
          })
      } else {
        res.status(401).end()
      }
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.delete('/:itemId', token.decode, (req, res) => {
  const itemId = req.params.itemId

  userExists(req.user.username)
    .then(userExists => {
      if (userExists) {
        orderItems.deleteOrderItem(itemId)
          .then(() => {
            res.sendStatus(200)
          })
      } else {
        res.status(401).end()
      }
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.put('/is-complete', token.decode, (req, res) => {
  const orderId = req.body.orderId
  userExists(req.user.username)
    .then(userExists => {
      if (userExists) {
        db.markCompleted(orderId)
          .then(() => {
            res.sendStatus(200)
          })
      } else {
        res.status(401).end()
      }
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.get('/history', (req, res) => {
  db.getOrders()
    .then(allOrders => {
      const orders = []
      const returnedOrders = _.groupBy(allOrders, orders => orders.id)
      for (let id in returnedOrders) {
        orders.push(returnedOrders[id])
      }
      res.json(orders)
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

