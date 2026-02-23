import { useCart } from "../cart/CartContext";

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-lg">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item._id}
          className="border p-4 mb-3 flex justify-between"
        >
          <span>{item.title}</span>
          <span>Qty: {item.cartQty}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;