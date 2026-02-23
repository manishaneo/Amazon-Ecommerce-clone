import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./inventory/InventoryContext";
import { CartProvider } from "./cart/CartContext";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminAddProduct from "./admin/AdminAddProduct";

function App() {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminAddProduct />} />
          </Routes>
        </CartProvider>
      </InventoryProvider>
    </BrowserRouter>
  );
}

export default App;