import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryMenu from "./components/CategoryMenu";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <CategoryMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
