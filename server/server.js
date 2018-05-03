const express = require('express')

const auth = require('./routes/auth')

const server = express()
// middleware
server.use(express.json())
// routes
server.use('/api/v1/', auth)  

module.exports = server
