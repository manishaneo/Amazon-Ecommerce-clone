import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { InventoryProvider } from "./inventory/InventoryContext";
import { CartProvider } from "./cart/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <InventoryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </InventoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);