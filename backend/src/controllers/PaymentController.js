import Inventory from "../models/Inventory.js";
import Product from "../models/Product.js";

export const processPayment = async (req, res) => {
    const { productId, quantity } = req.body;
    const item = await Inventory.findOne({ productId });
    const product = await Product.findById(productId);

    if (!item)
        return res.status(404).json({
            error: "Inventory not found",
            title: product ? product.title : "Unknown"
        });

    if (item.stock < quantity)
        return res.status(400).json({
            error: "Not enough stock left",
            title: product.title,
            available: item.stock,
            requested: quantity
        });

    item.stock -= quantity;
    await item.save();

    res.json({
        message: "Payment successful",
        title: product.title,
        remainingStock: item.stock
    });
};
// MULTI-PRODUCT PAYMENT WITH PARTIAL SUCCESS
export const processMultiplePayments = async (req, res) => {
    const { items } = req.body;

    const successful = [];
    const failed = [];

    for (let item of items) {
        const inv = await Inventory.findOne({ productId: item.productId });
        const product = await Product.findById(item.productId); // fetch title

        if (!inv) {
            failed.push({
                productId: item.productId,
                title: product ? product.title : "Unknown",
                error: "Inventory not found"
            });
            continue;
        }
    
        if (inv.stock < item.quantity) {
            failed.push({
                productId: item.productId,
                title: product.title,
                available: inv.stock,
                requested: item.quantity
            });
            continue;
        }

        //Deduct stock
        inv.stock -= item.quantity;
        await inv.save();

        successful.push({
            productId: item.productId,
            title: product.title,
            purchased: item.quantity,
            remainingStock: inv.stock
        });
    }

    if (failed.length === 0) {
        return res.json({
            message: "Order processed successfully",
            successful
        });
    }

    return res.json({
        message: "Partial order processed",
        successful,
        failed
    });
};