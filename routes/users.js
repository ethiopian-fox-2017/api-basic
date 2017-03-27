var express = require('express');
var router = express.Router();
var db = require('../models/index');
var usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET ALL USER
// router.get('/users', function(req, res, next) {
//   db.User.findAll()
//   .then((datas)=> {
//     res.send(datas)
//   })
//   .catch((err)=> {
//     res.send(err)
//   })
// })
router.get('/users', usersController.getAll)

//GET A SINGLE USER BASED ON ID
// router.get('/users/:id', function(req, res, next) {
//   db.User.findById(req.params.id)
//   .then((data) => {
//     res.send(data)
//   })
//   .catch((err)=> {
//     res.send(err)
//   })
// })
router.get('/users/:id', usersController.getOne)


//CREATE A USER
// router.post('/users', function(req, res, next) {
//   db.User.create(req.body)
//   .then((data) => {
//     res.send(data)
//   })
// })
router.post('/users', usersController.addOneUser)


//DELETE A USER
// router.delete('/users/:id', function(req, res, next) {
//   db.User.destroy({
//     where: {id: req.params.id}
//   })
//     .then(()=> {
//       res.send()
//     })
//     .catch((err)=> {
//       res.send(err)
//     })
// })
router.delete('/users/:id', usersController.deleteOneUser)

//UPDATE A USER WITH NEW INFO
// router.put('/users/:id', function(req, res, next) {
//   db.User.update(req.body, {
//     where: {id: req.params.id}
//   })
//   .then((data) => {
//     res.send(data)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// })
router.put('/users/:id', usersController.editOneUser)


module.exports = router;
