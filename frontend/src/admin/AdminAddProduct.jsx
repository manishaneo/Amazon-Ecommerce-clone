import { useState } from "react";
import { useInventory } from "../inventory/InventoryContext";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const { addProduct, addInventory, fetchInventory } = useInventory();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      
      const product = await addProduct(form);

      
      await addInventory(product._id);

      
      await fetchInventory();

      alert("✅ Product added successfully");
      navigate("/"); 
    } catch (err) {
      console.error(err);
      alert("❌ Error adding product");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-md mx-auto p-6 grid gap-3"
    >
      <h2 className="text-xl font-bold">Admin – Add Product</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button className="bg-yellow-400 py-2 font-bold rounded">
        Add Product
      </button>
    </form>
  );
};

export default AdminAddProduct;