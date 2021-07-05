const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

router.post("/", userController.addUser);

module.exports = router;
