import Inventory from "../models/Inventory.js";

export const processPayment = async (req, res) => {
    const { productId, quantity } = req.body;

    const item = await Inventory.findOne({ productId });

    if (!item) return res.status(404).json({ error: "Inventory not found" });

    if (item.stock < quantity)
        return res.status(400).json({ error: "Not enough stock left" });

    item.stock -= quantity;
    await item.save();

    res.json({
        message: "Payment successful",
        remainingStock: item.stock
    });
};
// MULTI-PRODUCT PAYMENT WITH PARTIAL SUCCESS
export const processMultiplePayments = async (req, res) => {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "Items array required" });
    }

    const successful = [];
    const failed = [];

    for (let item of items) {
        const inv = await Inventory.findOne({ productId: item.productId });

        if (!inv) {
            failed.push({
                productId: item.productId,
                error: "Inventory not found"
            });
            continue;
        }

        if (inv.stock < item.quantity) {
            // not enough stock → fail this item
            failed.push({
                productId: item.productId,
                available: inv.stock,
                requested: item.quantity
            });
            continue;
        }

        // enough stock → process payment
        inv.stock -= item.quantity;
        await inv.save();

        successful.push({
            productId: item.productId,
            purchased: item.quantity,
            remainingStock: inv.stock
        });
    }

    res.json({
        message: "Partial order processed",
        successful,
        failed
    });
};