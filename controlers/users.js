var model = require('../models');
let crypto = require('crypto');
let shortid = require('short-id');
module.exports = {
    getusers: function(req, res) {
        model.User.findAll().then(function(users) {
            res.json(users)
        })
    },
    getuser: function(req, res) {
        model.User.find({
            where: {
                id: req.params.id
            }
        }).then(function(user) {
            res.json(user)
        })
    },
    insertUser: function(req, res) {
        let salt = shortid.generate();
        model.User.create({
            username: req.body.username,
            email: req.body.email,
            salt: salt,
            password: crypto.createHmac('sha256', salt)
                .update(req.body.password).digest('hex')
        }).then(function() {
            res.send('data inserted');
        })
    },
    deleteUser: function(req, res) {
        model.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.send('data deleted')
        })
    },
    updateUser: function(req, res) {
        model.User.update({
            username: req.body.username,
            email: req.body.email
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.send('data updated')
        })
    }
}
