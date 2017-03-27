'use strict'

const express = require('express');
const router = express.Router();
let models = require('../models');
let controllers = require('../controllers/teacherController');

/* GET users listing. */
router.get('/', controllers.getAll);

router.get('/:id', controllers.getById);

router.post('/', controllers.createOne);

router.delete('/:id', controllers.deleteOne);

router.put('/:id', controllers.updateOne);

module.exports = router;
