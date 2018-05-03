const server = require('./server')

const PORT = 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port:', PORT)
})
