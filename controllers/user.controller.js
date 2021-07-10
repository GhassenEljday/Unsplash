const userService = require("../services/user.service.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  async addUser(req, res) {
    try {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hash,
          };
          const user = await userService.addUser(newUser);
          res.send(user);
        });
      });
    } catch (error) {
      res.send(error);
    }
  },

  async getAll(req, res) {
    try {
      const users = await userService.getUsers();
      res.send(users);
    } catch (error) {
      res.send("error");
    }
  },
};
