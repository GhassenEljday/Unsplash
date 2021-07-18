const mongoose = require("mongoose");

const imageScema = new mongoose.Schema({
  imgUrl: {
    type: String,
    unique: true,
  },
  userId: {
    type: String,
    require: true,
  },
});

const image = mongoose.model("Image", imageScema);

module.exports = image;
