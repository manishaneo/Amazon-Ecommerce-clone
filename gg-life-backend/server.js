import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./src/config/db.js";

import ProductRoutes from "./src/routes/ProductRoutes.js"
import InventoryRoutes from "./src/routes/InventoryRoutes.js"
import router from "./src/routes/authRoute.js";
import {errorHandler} from "./src/middleware/errorMiddleware.js"
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ProductRoutes);
app.use("/api", InventoryRoutes);

app.use("/api/auth",router);


app.use(errorHandler);

connectDB();

app.listen(5001, () => {
  console.log("GG-Life-Server running on port 5001");
});
