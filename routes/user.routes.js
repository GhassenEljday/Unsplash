const router = require("express").Router();
const userController = require("../controllers/user.controller.js");
const athentication = require("../middlewares/authentication.js");

router.post("/", userController.addUser);

router.get("/", athentication, userController.getAll);

module.exports = router;
