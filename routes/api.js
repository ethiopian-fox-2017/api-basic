var express = require('express');
var router = express.Router();

/* user controllers require */
var userControllers = require('../controllers/user.js')


/* GET users listing. */
router.get('/users', userControllers.getAllData)

      .post('/users', userControllers.insertData)

      .get('/users/:id', userControllers.singleUser)

      .delete('/users/:id', userControllers.deleteData)

      .put('/users/:id', userControllers.updateData)

module.exports = router;
