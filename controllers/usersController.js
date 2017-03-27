let db = require("../models");

let getAllUser = (req, res) => {
  db.User
    .findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let getSingleUser = (req, res) => {
  db.User
    .findAll(
      {where: {id: req.params.id}}
    )
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let createUser = (req, res) => {
  db.User
    .create(
      {nama: req.body.nama, email: req.body.email}
    )
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let deleteUser = (req, res) => {
  db.User
    .destroy(
      {where: {id: req.params.id}}
    )
    .then(() => {
      res.send(true)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

let updateUser = (req, res) => {
  db.User
    .update(
      {nama: req.body.nama, email: req.body.email},
      {where: {id: req.params.id}}
    )
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  getAllUser, getSingleUser, createUser, deleteUser, updateUser
}
