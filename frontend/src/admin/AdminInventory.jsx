import { useInventory } from "../inventory/InventoryContext";

const AdminInventory = () => {
  const { inventory, restockSingle } = useInventory();

  return (
    <div className="page-bg p-6">
      <h2 className="text-xl mb-4">Inventory</h2>

      {inventory.map((item) => (
        <div key={item._id} className="flex justify-between mb-2">
          <span>
            {item.productId.title} (Stock: {item.stock})
          </span>
          <button
            onClick={() => restockSingle(item.productId._id, 5)}
            className="bg-green-500 text-white px-3 rounded"
          >
            +5
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminInventory;