var express = require('express');
var router = express.Router();

router.get('/sign_in', (req, res) => res.render('users/sign_in'));

module.exports = router