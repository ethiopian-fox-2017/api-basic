var express = require('express');
var router = express.Router();
var models = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// router.get('/users/:id', function(req, res) {
//   models.User.findById(req.params.id).then(function(user) {
//     res.send(user)
//   })
// })
//
// router.post('/users', function(req, res) {
//   models.User.update(req.body).then(function(datas){
//     res.send(datas)
//   }).catch(function(err) {
//     res.send(err)
//   })
// })
//

module.exports = router;
