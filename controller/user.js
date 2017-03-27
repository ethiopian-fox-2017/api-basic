'use strict';
var express = require('express');
var User = require('../models').User;

var user = {};
user.findAll = function(req,res,next) {
  User.findAll({order: [['id', 'ASC']]})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  })
}

user.findOne = function(req,res,next) {
  User.findById(req.params.id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  })
}

user.create = function(req,res,next) {
  User.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  })
}

user.update = function(req,res,next) {
  User.update(req.body,{where:{id:req.params.id}})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  })
}

user.delete = function(req,res,next) {
  User.delete({where:{id:req.params.id}})
  .then(() => {
    res.send('deleted');
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = user
