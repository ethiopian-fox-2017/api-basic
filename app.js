var express = require('express');
var app = express.Router()

const users = require('./models/users');



app.use('/api/users', users)

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

modules.exports = app
