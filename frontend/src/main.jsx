import ReactDOM from "react-dom/client";
import App from "./App";
import { InventoryProvider } from "./inventory/InventoryContext";
import { CartProvider } from "./cart/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <InventoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </InventoryProvider>
  </ThemeProvider>
);