import express from "express";
import {
  getInventory,
  addInventory,
  restockInventory,
  restockMultipleInventory
} from "../controllers/InventoryController.js";
import { processPayment , processMultiplePayments} from "../controllers/PaymentController.js";

const router = express.Router();

router.get("/inventory", getInventory);
router.post("/inventory", addInventory);
router.post("/payment", processPayment);
router.post("/inventory/restock", restockInventory);
router.post("/inventory/restock/multiple", restockMultipleInventory);
router.post("/payment/multiple", processMultiplePayments);

export default router;