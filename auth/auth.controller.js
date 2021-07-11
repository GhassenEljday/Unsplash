const userService = require("../services/user.service.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  async login(req, res) {
    const userInfo = req.body;
    try {
      const user = await userService
        .getUserByUsername(userInfo.username)
        .orFail(() => {
          throw new Error("This user dosen't exist");
        });
      const result = await bcrypt.compare(userInfo.password, user.password);
      if (!result) {
        throw new Error("Wrong password");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};
