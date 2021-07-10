const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Enter a username."],
    unique: [true, "That username is taken."],
  },
  email: {
    type: String,
    require: [true, "Enter an email address."],
    unique: [true, "That email address is taken."],
  },
  password: { type: String, require: true },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
