import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./inventory/InventoryContext";
import { CartProvider } from "./cart/CartContext";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminAddProduct from "./admin/AdminAddProduct";
import AdminInventory from "./admin/AdminInventory";
import Navbar from "./components/Navbar";
import Login from "./gg-life/pages/Login";
import Signup from "./gg-life/pages/Signup";
import ForgotPassword from "./gg-life/pages/ForgotPassword";
import ResetPassword from "./gg-life/pages/ResetPassword";
import VerifyEmail from "./gg-life/pages/VerifyEmail";
import EmailSuccess from "./gg-life/pages/EmailSuccess";

import ProtectedRoute from "./gg-life/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <CartProvider>
          <Routes>

            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/email-success" element={<EmailSuccess />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminAddProduct />} />
            <Route path="/admin/inventory" element={<AdminInventory />} />
            <Route path="*" element={<p className="p-6">Page Not Found</p>} />

            <Route
              path="/amazon"
              element={
                <ProtectedRoute>
                  <>
                  <Navbar/>
                  <Home />
                  </>
                </ProtectedRoute>
              }
            />

            {/* <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />


            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminAddProduct />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </CartProvider>
      </InventoryProvider>
    </BrowserRouter>
  );
}

export default App;