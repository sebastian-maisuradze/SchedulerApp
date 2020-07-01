const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('hit the login route');
});

module.exports = router;
