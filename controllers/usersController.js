var db = require('../models/index');

var getAll = function (req, res, next) {
  db.User.findAll()
  .then((datas)=> {
    res.send(datas)
  })
  .catch((err)=> {
    res.send(err)
  })
}

var getOne = function(req, res, next) {
  db.User.findById(req.params.id)
  .then((data) => {
    res.send(data)
  })
  .catch((err)=> {
    res.send(err)
  })
}

var addOneUser = function(req, res, next) {
  db.User.create(req.body)
  .then((data) => {
    res.send(data)
  })
}

var deleteOneUser = function(req, res, next) {
  db.User.destroy({
    where: {id: req.params.id}
  })
    .then(()=> {
      res.send()
    })
    .catch((err)=> {
      res.send(err)
    })
}

var editOneUser = function(req, res, next) {
  db.User.update(req.body, {
    where: {id: req.params.id}
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err)
  })
}


module.exports = {
  getAll,
  getOne,
  addOneUser,
  deleteOneUser,
  editOneUser
}
