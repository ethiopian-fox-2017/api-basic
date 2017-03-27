'use strict'
var db = require('../models');

let getUser = function(req, res, next) {

  db.User.findAll()
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.send(err.message)
  })
   
   // return newdate
 }
 
let getUserById = function(req, res, next) {

  db.User.findById(req.params.id)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.send(err.message)
  })
   
   // return newdate
 }

let createUser = function(req, res, next) {

  db.User.create(req.body)
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err.message)
  })
   
   // return newdate
 } 

let deleteUser = function(req, res, next) {

  db.User.destroy({
       where: {
         id: req.params.id
       }
     })
     .then((data) => {
       res.send(data);
     })
     .catch((err) => {
       res.send(err.message)
     })
   
   // return newdate
 }

let updateUser = function(req, res, next) {
    var data = req.body;

    db.User.update(data, {
      where: {
        id: req.params.id
      }
    })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err.message)
    })
   
   // return newdate
 }  

 module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser
}