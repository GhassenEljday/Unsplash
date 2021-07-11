const userService = require("../services/user.service.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  async addUser(req, res) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(req.body.password, salt);
      const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      };
      const user = await userService.addUser(newUser);
      res.send(user);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send("this user already exists");
      }
    }
  },

  async getAll(req, res) {
    try {
      const users = await userService.getUsers();
      res.send(users);
    } catch (error) {
      res.send(error);
    }
  },

  async getUserByName(req, res) {},
};
