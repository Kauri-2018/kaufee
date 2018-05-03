// const path = require('path')
const express = require('express')
// const passport = require('passport')

const auth = require('./routes/auth')

const server = express()

// middleware
// server.use(express.static(path.join(__dirname, '../public')))
// server.use(passport.initialize())
server.use(express.json())
// routes
server.use('/api/v1/', auth)  
// server.use('/profile/', profile)
// wildcard route
// server.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// })

module.exports = server
