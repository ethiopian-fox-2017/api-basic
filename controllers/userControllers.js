var db = require('../models');

//get all users
let getUsers = function(req, res) {
  db.User.findAll()
         .then((datas) => {
           res.send(datas);
         })
         .catch((err) => {
           res.send(err.message);
         })
}

//get user by id
let getUser = function(req, res) {
  db.User.findById(req.params.id)
         .then((datas) => {
           res.send(datas);
         })
         .catch((err) => {
           res.send(err.message);
         })
}

let postUser = function(req, res) {
  db.User.create(req.body)
         .then((data) => {
           res.send(data);
         })
         .catch((err) => {
           res.send(err.message);
         })
}

let deleteUser = function(req ,res) {
  db.User.destroy({where:{id: req.params.id}})
         .then(() => {
           res.send('Data berhasil di delete');
         })
         .catch((err) => {
           res.send(err.message)
         })
}

let updateUser = function(req ,res) {
  db.User.update(req.body ,{where:{id: req.params.id}})
         .then(() => {
           res.send('Data berhasil di update');
         })
         .catch((err) => {
           res.send(err.message)
         })
}

module.exports = {getUsers,getUser, postUser, deleteUser, updateUser};