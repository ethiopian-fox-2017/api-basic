const User = require('../models').User

module.exports = {

  getAll: (req, res)=> {
    User.findAll()
      .then((data)=> {
        res.send(data);
      })
      .catch((err)=> {
        res.send(err)
      })
  },
  newUser: (req, res)=> {
    User.create(req.body)
      .then((data)=> {
        res.send(data)
      })
      .catch((err)=> {
        res.send(err)
      })
  },
  getOneUser: (req, res)=> {
    User.findById(req.params.id)
      .then((data)=> {
        res.send(data)
      })
      .catch((err)=> {
        res.send(err)
      })
  },
  deleteUser: (req, res)=> {
    User.destroy({
      where: {id: req.params.id}
    })
      .then(()=> {
        res.send('Delete Success')
      })
      .catch((err)=> {
        res.send(err)
      })
  },
  updateUser: (req, res)=> {
    User.update(req.body, {
      where: {id: req.params.id}
    })
      .then((data)=> {
        res.send(data)
      })
      .catch((err)=> {
        res.send(data)
      })
  }


}