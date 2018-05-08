const path = require('path')
const express = require('express')

const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const profileRoutes = require('./routes/profile')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/current-order', homeRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/profile', profileRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
