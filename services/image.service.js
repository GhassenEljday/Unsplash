modelu.exports = new (class ImageService {
  constructor() {
    this.imgae = require("../models/image.js");
  }

  addImage(payloud) {
    return this.imgae.create(payloud);
  }

  getImagesByUserId(id) {
    return this.imgae.find({ _id: id });
  }
})();
