var express = require('express');
var router = express.Router();
var control = require('../controllers/userControllers');


router.get('/api/users',control.getUsers);
router.get('/api/users/:id',control.getUser);
router.post('/api/users',control.postUser);
router.delete('/api/users/:id', control.deleteUser);
router.put('/api/users/:id', control.updateUser);


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
