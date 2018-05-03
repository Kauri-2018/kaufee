const path = require('path')
const express = require('express')

const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/current-order', homeRoutes)

module.exports = server
