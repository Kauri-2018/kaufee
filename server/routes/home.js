const express = require('express')

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
        isCurrentOrderActive: true,
        items: items.map(item => ({
          id: item.orderItemId,
          name: item.userName,
          order: item.orderDetails
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
        res.status(403).end()
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
        res.status(403).end()
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
        res.status(403).end()
      }
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})

router.put('/new-order', (req, res) => {
  db.addNewOrder()
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})
