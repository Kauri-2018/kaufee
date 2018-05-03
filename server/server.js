const path = require('path')
const express = require('express')

const server = express()

const homeRoutes = require('./routes/home')
const auth = require('./routes/auth')

server.use(express.static(path.join(__dirname, '../public')))
server.use('api/v1/current-order', homeRoutes)

server.use(express.json())
server.use('/api/v1/', auth)  

module.exports = server
