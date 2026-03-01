import { useCart } from "../cart/CartContext";
import { useInventory } from "../inventory/InventoryContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, buyNow } = useCart();
  const { fetchInventory } = useInventory();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <p className="page-bg p-6">Cart is empty</p>;
  }

  return (
    <div className="page-bg p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b py-2"
        >
          <span>{item.productId.title}</span>
          <span>₹{item.productId.price}</span>
        </div>
      ))}

      
      <button
        onClick={async () => {
          await buyNow();          
          await fetchInventory();  
          navigate("/");           
        }}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-bold"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Cart;