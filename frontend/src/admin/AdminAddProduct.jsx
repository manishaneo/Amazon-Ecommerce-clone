import { useState } from "react";
import { useInventory } from "../inventory/InventoryContext";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const { addProduct } = useInventory();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    quantity: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    addProduct({
  _id: Date.now().toString(),
  title: form.title,
  category: form.category,
  quantity: Number(form.quantity),
  image:
    "https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_UF1000,1000_QL80_.jpg",
});

    // ✅ Redirect to Home (same session)
    navigate("/");

    setForm({ title: "", category: "", quantity: "" });
  };

  return (
    <div className="p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4">Admin – Add Product</h2>

      <form onSubmit={submitHandler} className="space-y-3">
        <input
          placeholder="Product Name"
          className="border p-2 w-full"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          placeholder="Category (television)"
          className="border p-2 w-full"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Quantity (2 or 3)"
          className="border p-2 w-full"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 w-full">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;