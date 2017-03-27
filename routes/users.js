var express = require('express');
var router = express.Router();

/* user controllers require */
var userControllers = require('../controllers/user.js')


/* GET users listing. */
router.get('/', userControllers.getAllData)

      .post('/', userControllers.insertData)

      .get('/:id', userControllers.singleUser)

      .delete('/:id', userControllers.deleteData)

      



module.exports = router;
