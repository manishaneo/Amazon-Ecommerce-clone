import { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  
  const buyNow = async () => {
    if (cart.length === 0) return;

    const items = cart.map((item) => ({
      productId: item.productId._id,
      quantity: 1,
    }));

    await axios.post("http://localhost:5000/api/payment/multiple", {
      items,
    });

    alert("Order placed successfully!");
    setCart([]); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, buyNow }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);