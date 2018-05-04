const db = require('../db/users')

module.exports = {
  issue
}

function issue (req, res) {
  db.getCredsByName(req.body.username)
    .then(user => {
      res.json({
        message: 'Authentication successful.',
        token: user.hash
      })
    })
}
 