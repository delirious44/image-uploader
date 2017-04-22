var mongoose = require("mongoose");
var images = new mongoose.Schema({
  image: String,
  url: String,
  path: String,
  uploadDate: Date,
  expireDate: Date,
  owner: String
});

// Create Model
var Image = mongoose.model('imageId', images);

module.exports = Image;