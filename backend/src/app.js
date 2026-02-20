import express from "express";
import cors from "cors";

import ProductRoutes from "./routes/ProductRoutes.js";
import InventoryRoutes from "./routes/InventoryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ProductRoutes);
app.use("/api", InventoryRoutes);

export default app;