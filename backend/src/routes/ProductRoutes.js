const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById
} = require("../controllers/ProductController");

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);

module.exports = router;

