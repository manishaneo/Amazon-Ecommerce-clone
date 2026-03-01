import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import {useTheme} from "../context/ThemeContext";
const Navbar = () => {
  const { cart } = useCart();
  const{toggleTheme, theme}=useTheme();
  return (
    <div className="navbar px-6 py-3 flex justify-between">
      <Link to="/" className="font-bold text-xl text-amazon">
        amazon
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/admin">Admin</Link>

        
        <Link to="/cart">
          Cart ({cart.length})
        </Link>
        <button onClick={toggleTheme} 
        className="btn-amazon px-3 py-1 rounded"
        >
          {theme === "light" ? " 🌙 dark": " ☀ light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;