var express = require('express');
const internalIP = require('internal-ip');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var ip = await internalIP.v4();
  res.send(`My Ip is ${ip}`);
});

module.exports = router;
