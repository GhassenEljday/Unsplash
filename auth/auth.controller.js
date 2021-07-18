const userService = require("../services/user.service.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

module.exports = {
  async login(req, res) {
    const userInfo = req.body;
    try {
      const user = await userService
        .getUserByUsername(userInfo.username)
        .orFail(() => {
          throw new Error("this user is not registered");
        });
      const result = await bcrypt.compare(userInfo.password, user.password);
      if (!result) {
        throw new Error("Wrong password, please check again");
      }
      const token = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "1d",
        }
      );

      res.send(token);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};
