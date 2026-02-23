import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.cartQty,
    0
  );

  return (
    <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        amazon<span className="text-yellow-400">.clone</span>
      </Link>

      <Link to="/cart" className="relative flex items-center">
        <span className="text-xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full px-2">
            {totalItems}
          </span>
        )}
        <span className="ml-2">Cart</span>
      </Link>
    </div>
  );
};

export default Navbar;