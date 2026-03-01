import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  brand: String,
  category: String,
  price: Number,
  rating: Number,
  image: String,
  description: String,
  images: [String]
});

export default mongoose.model("Product", productSchema);