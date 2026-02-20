import express from "express";
import {
  addProduct,
  getProducts,
  getProductById
} from "../controllers/ProductController.js";

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);

export default router;