import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 && <p>No items in cart.</p>}

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.brand}</p>
              <p className="font-bold">₹ {item.price}</p>
            </div>

            <button
              className="text-red-500"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
