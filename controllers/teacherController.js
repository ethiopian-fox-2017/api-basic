'use strict'

let models = require('../models');

let getAll = function (req, res, next) {
    models.Teacher.findAll()
      .then(function (instances) {
        res.send(instances);
      })
      .catch((err)=>{
        res.send(err);
      })
}

let getById = function (req, res, next) {
  models.Teacher.findOne({
    where: {id: req.params.id}
  })
    .then((instance)=>{
      res.send(instance);
    })
    .catch((err)=>{
      res.send(err);
    })
}

let createOne = function (req, res, next) {
  models.Teacher.create(req.body)
    .then((instance)=>{
      res.send(instance);
    })
    .catch((err)=>{
      res.send(err);
    })
}

let deleteOne = function (req, res, next) {
  models.Teacher.destroy({
    where: {id: req.params.id}
  })
    .then(()=>{
      res.send("deleted");
    })
    .catch((err)=>{
      res.send(err);
    })
}

let updateOne = function (req, res, next) {
  models.Teacher.update(req.body, {
    where: {id: req.params.id}
  })
    .then((instance)=>{
      res.send(instance);
    })
    .catch((err)=>{
      res.send(err);
    })
}

module.exports = {
  getAll,
  getById,
  createOne,
  deleteOne,
  updateOne
}
