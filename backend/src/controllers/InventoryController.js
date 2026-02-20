import Inventory from "../models/Inventory.js";

export const getInventory = async (req, res) => {
  const inventory = await Inventory.find().populate("productId");
  res.json(inventory);
};

export const addInventory = async (req, res) => {
  const { productId, stock } = req.body;

  const inv = new Inventory({ productId, stock });
  await inv.save();

  res.json({ message: "Inventory added", inventory: inv });
};

// ADMIN: Restock inventory
export const restockInventory = async (req, res) => {
  const { productId, amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Restock amount must be greater than 0" });
  }

  const item = await Inventory.findOne({ productId });

  if (!item) {
    return res.status(404).json({ error: "Inventory not found for this product" });
  }

  item.stock += amount;
  await item.save();

  res.json({
    message: "Inventory restocked successfully",
    newStock: item.stock
  });
};
// ADMIN: Restock multiple products
export const restockMultipleInventory = async (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Items array required" });
  }

  const successful = [];
  const failed = [];

  for (let item of items) {
    const inv = await Inventory.findOne({ productId: item.productId });

    // No inventory found
    if (!inv) {
      failed.push({
        productId: item.productId,
        error: "Inventory not found"
      });
      continue;
    }

    // Invalid amount
    if (!item.amount || item.amount <= 0) {
      failed.push({
        productId: item.productId,
        error: "Invalid restock amount"
      });
      continue;
    }

    // Add stock
    inv.stock += item.amount;
    await inv.save();

    successful.push({
      productId: item.productId,
      added: item.amount,
      newStock: inv.stock
    });
  }

  res.json({
    message: "Multi-product restock completed",
    successful,
    failed
  });
};