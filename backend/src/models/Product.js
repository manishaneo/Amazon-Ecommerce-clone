const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  brand: String,
  category: String,
  price: Number,
  rating: Number,
  image: String,
  description: String,
  images: [String]   // For product details gallery
});

module.exports = mongoose.model("Product", productSchema);
