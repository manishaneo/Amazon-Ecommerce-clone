import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    stock: {
        type: Number,
        default: 3
    }
});

export default mongoose.model("Inventory", inventorySchema);