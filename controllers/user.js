const models = require('../models')


module.exports = {

  getAllData : function(req, res, next){
      models.User.findAll()
                  .then(data => {
                    res.send(data)
                  })
                  .catch(err => {
                    res.send(err)
                  })
  },

  insertData : function(req, res, next){
    models.User.create(req.body)
               .then(data => {
                 res.send(data)
               })
               .catch(err => {
                 res.send(err)
               })

  },

  updateData : function(req, res, next){
    models.User.update(req.body,{ where : { id : req.params.id } })
                .then(user => {
                  res.send(user)
                })
                .catch(err => {
                  res.send(err)
                })
  },

  deleteData : function(req, res, next){
    models.User.destroy({ where : { id : req.params.id} })
                .then(user => {
                  res.json(user)
                })
                .catch(err => {
                  res.json(err)
                })

  },

  singleUser : function(req, res, next){
    models.User.findById(req.params.id)
               .then(user => {
                 res.send(user)
               })
               .catch(err => {
                 res.send(err)
               })
  }
}
