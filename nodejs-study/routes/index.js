const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  console.log(`request from ${req.ip} , ${req.method} ${req.path}`);
  res.send(`hi! this is index!`);
});

module.exports = router;
