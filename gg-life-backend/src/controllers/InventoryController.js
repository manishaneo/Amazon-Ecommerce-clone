import Inventory from "../models/Inventory.js";
import Product from "../models/Product.js";
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

// ADMIN--Restock inventory--single product
export const restockInventory = async (req, res) => {
    const { productId, amount } = req.body;

    const inv = await Inventory.findOne({ productId });
    const product = await Product.findById(productId);

    if (!inv)
        return res.status(404).json({
            error: "Inventory not found",
            title: product ? product.title : "Unknown"
        });

    inv.stock += amount;
    await inv.save();

    res.json({
        message: "Restock successful",
        title: product.title,
        added: amount,
        newStock: inv.stock
    });
};
// ADMIN--Restock multiple products
export const restockMultipleInventory = async (req, res) => {
    const { items } = req.body;

    const successful = [];
    const failed = [];

    for (let item of items) {
        const inv = await Inventory.findOne({ productId: item.productId });
        const product = await Product.findById(item.productId);

        if (!inv) {
            failed.push({
                productId: item.productId,
                title: product ? product.title : "Unknown",
                error: "Inventory not found"
            });
            continue;
        }

        if (!item.amount || item.amount <= 0) {
            failed.push({
                productId: item.productId,
                title: product.title,
                error: "Invalid amount"
            });
            continue;
        }

        inv.stock += item.amount;
        await inv.save();

        successful.push({
            productId: item.productId,
            title: product.title,
            added: item.amount,
            newStock: inv.stock
        });
    }
    
    if (failed.length === 0) {
        return res.json({
            message: "Multi-product restock completed",
            successful
        });
    }

    return res.json({
        message: "Multi-product restock completed with some errors",
        successful,
        failed
    });
};
