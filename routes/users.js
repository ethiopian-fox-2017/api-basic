const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

router.get("/", userController.getAllUser)
router.get("/:id", userController.getSingleUser)
router.post("/", userController.createUser)
router.delete("/:id", userController.deleteUser)
router.put("/:id", userController.updateUser)


module.exports = router
