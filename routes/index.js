var express = require('express');
var router = express.Router();
let crypto = require('crypto');
let shortid = require('short-id');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
