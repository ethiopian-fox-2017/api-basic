var express = require('express');
var db = require('../models');



var getAllUser = function(req, res) {
  db.User.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

var getOneUser = function(req, res){
  db.User.findOne({
    where: {id: req.params.id }
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

var createUser = function(req, res){
  db.User.create({
    name: req.body.name,
    address: req.body.address,
    birthdate: req.body.birthdate
  })
    .then((data)=>{
      res.send(data)
    })
    .catch((err)=>{
      res.send(err)
    })
}

var deleteUser = function(req, res) {
  db.User.destroy({
    where: {id: req.params.id}
  })
  .then((data)=>{
    res.send('User deleted')
  })
  .catch((err)=>{
    res.send(err)
  })
}

var updateUser = function(req, res) {
  db.User.update(
    {name: req.body.name,
     address: req.body.address,
     birthdate: req.body.birthdate},
    {where: {id: req.params.id}}
  )
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err)
  })
}



module.exports = {
  getAllUser, getOneUser, createUser, deleteUser, updateUser
};
