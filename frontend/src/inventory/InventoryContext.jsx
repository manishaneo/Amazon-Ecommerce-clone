import { createContext, useContext, useState } from "react";
import initialProducts from "../data/products";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  // Admin adds product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // User buys product → quantity decreases
  const buyProduct = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id && p.quantity > 0
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  return (
    <InventoryContext.Provider value={{ products, addProduct, buyProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);