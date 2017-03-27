var express = require('express');
var router = express.Router();
var db = require('../models');
var userController = require('../controller/user-controller')

/* GET users listing. */
router.get('/', userController.getAllUser);

router.get('/:id', userController.getOneUser)

router.post('/', userController.createUser)

router.delete('/:id', userController.deleteUser)

router.put('/:id', userController.updateUser)



module.exports = router;
