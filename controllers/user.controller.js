const userService = require("../services/user.service.js");

module.exports = {
  async addUser(req, res) {
    try {
      const user = await userService.addUser(req.body);
      res.send(user);
    } catch (error) {
      res.send("error");
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
