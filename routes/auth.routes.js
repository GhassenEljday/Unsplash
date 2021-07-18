const authRouter = require("express").Router();
const authController = require("../auth/auth.controller.js");
const athintication = require("../middlewares/authentication.js");

authRouter.post("/login", authController.login);

authRouter.get("/user", athintication, (req, res) => res.send(req.user));

module.exports = authRouter;
