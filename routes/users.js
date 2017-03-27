const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

/* GET All users. */
router.get('/', controller.getAll);

/* GET single user */
router.get('/:id', controller.getOneUser)

/* POST create a user */
router.post('/', controller.newUser)

/* DELETE a user */
router.delete('/:id', controller.deleteUser)

/* PUT update a user with new info */
router.put('/:id', controller.updateUser)

module.exports = router;
