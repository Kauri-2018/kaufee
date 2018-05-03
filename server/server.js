const express = require('express')

const auth = require('./routes/auth')

const server = express()
server.use(express.json())
server.use('/api/v1/', auth)  
server.use(express.static('public'))

module.exports = server
