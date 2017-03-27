var express = require('express');
var router = express.Router();
var db = require('../models');
var control = require('../controller/controller');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', control.getUser);

router.get('/:id', control.getUserById);

router.post('/', control.createUser);

router.delete('/:id', control.deleteUser);

router.put('/:id', control.updateUser);

module.exports = router;
