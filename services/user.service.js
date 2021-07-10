module.exports = new (class UserService {
  constructor() {
    this.user = require("../models/user.js");
  }

  getUsers() {
    return this.user.find();
  }

  addUser(payload) {
    return this.user.create(payload);
  }

  getUserById({ _id }) {
    return this.user.findOne({ _id });
  }

  getUserByEmail(Email) {
    return this.user.findOne({ email: Email });
  }

  getUserByUsername(userName) {
    return this.user.findOne({ username: userName });
  }

  updateUserById({ _id }, payload) {
    return this.user.findOneAndUpdate({ _id }, payload, {
      new: true,
    });
  }

  deleteUserById({ _id }) {
    return this.user.findOneAndDelete({ _id });
  }
})();
