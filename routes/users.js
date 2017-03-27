var express = require('express');
var router = express.Router();
var db = require('../models');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res) {
  db.User.findAll()
         .then((datas) => {
           res.send(datas);
         })
         .catch((err) => {
           res.send(err.message);
         })
})

module.exports = router;
