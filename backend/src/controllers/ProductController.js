const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product added successfully" });
};

exports.getProducts = async (req, res) => {
  const { search, category, min, max } = req.query;
  let query = {};

  if (search) query.title = { $regex: search, $options: "i" };
  if (category && category !== "all") query.category = category;

  if (min || max) {
    query.price = {};
    if (min) query.price.$gte = Number(min);
    if (max) query.price.$lte = Number(max);
  }

  const products = await Product.find(query);
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};
