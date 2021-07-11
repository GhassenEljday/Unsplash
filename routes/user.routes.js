const router = require("express").Router();
const userController = require("../controllers/user.controller.js");
const authController = require("../auth/auth.controller.js");

router.post("/", userController.addUser);

router.get("/", userController.getAll);

router.post("/login", authController.login);

module.exports = router;
