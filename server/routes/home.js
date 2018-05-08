const express = require('express')

const token = require('../auth/token')
const userExists = require('../db/users').userExists

const db = require('../db/orders')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  db.getCurrentOrderItems()
    .then(items => {
      if (!items.length) {
        return res.json({
          id: 0,
          items: [],
          isCurrentOrderActive: false
        })
      }
      const currentOrder = {
        id: items[0].orderId,
        items: items.map(item => ({
          id: item.orderItemId,
          name: item.userName,
          order: item.orderDetails
        })),
        isCurrentOrderActive: true
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
        return db.addToOrder(userId, orderId)
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
        db.deleteOrderItem(itemId)
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

router.put('/new-order', token.decode, (req, res) => {
  db.addNewOrder(Number(req.body.userId))
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
    })
})
