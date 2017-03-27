var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', userController.getAll)
  .get('/:id', userController.getOne)
  .post('/', userController.postCreate)
  .delete('/:id', userController.deleteOne)
  .put('/:id', userController.putUpdate)
  .patch('/:id', userController.patchUpdate)

module.exports = router;
