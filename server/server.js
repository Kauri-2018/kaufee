const express = require('express')

const server = express()
server.use(express.static('server/public'))

module.exports = server
