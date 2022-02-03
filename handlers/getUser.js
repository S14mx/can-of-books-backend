`use strict`;
const verifyUser = require('../auth')

let getUser = (req, res) => {
  verifyUser (req, (err, user) => {
    if (err) {
      res.send('invalid token');
    } else {
      res.send(user);
    }
  })
}

module.exports = getUser;