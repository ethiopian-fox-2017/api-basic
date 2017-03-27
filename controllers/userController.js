var User = require('../models').User
var passwordHash = require('password-hash');

module.exports = {
  getAll: function(req, res, next) {

    User.findAll({ order: 'id' })
      .then((users) => {
        if (users.length) {
          res.json(users)
        } else {
          res.send('No user')
        }
      })
      .catch(err => res.send(err.message))

  }, // getAll

  getOne: function(req, res, next) {

    User.findOne({ where: { id: req.params.id }})
      .then((user) => {
        if (user) {
          res.json(user)
        } else {
          res.send('Not found')
        }
      })
      .catch(err => res.send(err.message))

  }, // getOne

  postCreate: function(req, res, next) {

    let data = {
      username: req.body.username,
      password: passwordHash.generate(req.body.password),
      name: req.body.name,
      dateofbirth: req.body.dateofbirth,
      placeofbirth: req.body.placeofbirth,
      gender: req.body.gender,
      role: req.body.role
    }

    User.create(data)
      .then((user) => {
        res.json(user)
      })
      .catch(err => res.send(err.message))

  }, // postCreate

  deleteOne: function(req, res, next) {

    User.destroy({ where: { id: req.params.id }})
      .then((row) => {
        if (row) {
          res.send('Deleted')
        } else {
          res.send('Not found')
        }
      })
      .catch(err => res.send(err.message))

  }, // deleteOne

  putUpdate: function(req, res, next) {

    let data = {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      dateofbirth: req.body.dateofbirth,
      placeofbirth: req.body.placeofbirth,
      gender: req.body.gender,
      role: req.body.role
    }

    User.findOne({ where: { id: req.params.id }})
      .then((user) => {
        if (user) {
          user.update(data)
            .then(user => {
              res.json(user)
            })
            .catch(err => res.send(err.message))
        } else {
          res.send('Not found')
        }
      })
      .catch(err => res.send(err.message))

  }, // putUpdate

  patchUpdate: function(req, res, next) {

    let data = {}
    for (let prop in req.body) {
      dat[prop] = req.body[prop]
    }

    User.findOne({ where: { id: req.params.id }})
      .then((user) => {
        if (user) {
          user.update(data)
            .then(user => {
              res.json(user)
            })
            .catch(err => res.send(err.message))
        } else {
          res.send('Not found')
        }
      })
      .catch(err => res.send(err.message))

  } // patchUpdate

}