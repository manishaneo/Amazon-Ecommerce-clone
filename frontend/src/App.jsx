import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminAddProduct from "./admin/AdminAddProduct";
import AdminInventory from "./admin/AdminInventory";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminAddProduct />} />
        <Route path="/admin/inventory" element={<AdminInventory />} />
        <Route path="*" element={<p className="p-6">Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;