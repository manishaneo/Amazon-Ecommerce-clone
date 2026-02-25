import { useInventory } from "../inventory/InventoryContext";
import { useCart } from "../cart/CartContext";

const Home = () => {
  const { inventory, loading } = useInventory();
  const { addToCart } = useCart();

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 ">
      {inventory.map((item) => (
        <div
          key={item._id}
          className="card p-4 rounded shadow"
        >
         
          {item.productId.image && (
            <img
              src={item.productId.image}
              alt={item.productId.title}
              className="h-40 mx-auto object-contain"
            />
          )}

          <h3 className="mt-2 font-semibold text-sm">
            {item.productId.title}
          </h3>

          <p className="font-bold">₹{item.productId.price}</p>
          <p className="text-xs opacity-70">
            Stock: {item.stock}
          </p>

          
          <button
            disabled={item.stock === 0}
            onClick={() => addToCart(item)}
            className={`mt-3 w-full py-2 rounded font-bold
              ${
                item.stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500"
              }
            `}
          >
            {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;