var express = require('express');
var router = express.Router();
var user = require("../controller/user.js");

/* GET users listing. */

router.get('/api/users', user.findAll)
router.get('/api/users/:id', user.findOne)
router.post('/api/users', user.create);
router.put('/api/users/:id', user.update);
router.patch('/api/users/:id',user.update);
router.delete('/api/users/:id', user.delete);


module.exports = router;
