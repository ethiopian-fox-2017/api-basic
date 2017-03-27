var express = require('express');
var router = express.Router();
var db = require('../models');
var controller = require('../controller/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', controller.getAll)

router.get('/api/users/:id', controller.getOne)

router.post('/api/users', controller.addnew)

router.delete('/api/users/:id', controller.deleteUser)

router.put('/api/users/:id', controller.updateUser)

module.exports = router;
