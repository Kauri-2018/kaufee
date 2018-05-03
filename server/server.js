const path = require('path')
const express = require('express')

const server = express()

const homeRoutes = require('./routes/home')

server.use(express.static(path.join(__dirname, '../public')))
server.use('api/v1/current-order', homeRoutes)

module.exports = server
