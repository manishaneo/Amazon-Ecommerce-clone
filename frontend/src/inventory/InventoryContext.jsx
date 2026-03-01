import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const InventoryContext = createContext();
const API = "http://localhost:5000/api";

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    const res = await axios.get(`${API}/inventory`);
    setInventory(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  
  const addProduct = async (productData) => {
    const res = await axios.post(`${API}/products`, productData);

   
    const products = await axios.get(`${API}/products`);
    const createdProduct = products.data.at(-1);

    return createdProduct; 
  };

  
  const addInventory = async (productId) => {
    await axios.post(`${API}/inventory`, {
      productId,
      stock: 3,
    });
  };

   const restockSingle = async (productId, amount = 1) => {
    await axios.post(`${API}/inventory/restock`, {
      productId,
      amount,
    });

    fetchInventory();
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        loading,
        fetchInventory,
        addProduct,
        addInventory,
        restockSingle,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);