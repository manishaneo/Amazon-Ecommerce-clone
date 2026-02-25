import { useInventory } from "../inventory/InventoryContext";
import { useCart } from "../cart/CartContext";
import {useTheme} from "../context/ThemeContext";
const ProductCard = ({ product }) => {
  const {theme}=useTheme();
  if (!product) return null;

  const { buyProduct } = useInventory();
  const { addToCart } = useCart();

  const soldOut = product.quantity === 0;

  const handleAddToCart = () => {
    if (soldOut) return;

    addToCart(product);        
    buyProduct(product._id);  
  };

  return (
    <div className="card p-4 ">
      <h3 className="font-semibold">{product.title}</h3>
      <p>Available: {product.quantity}</p>

      <div className="h-40 flex items-center justify-center mb-3">
  <img
    src={product.image}
    alt={product.title}
    className="max-h-full max-w-full object-contain"
    onError={(e) => {
      e.target.src =
        "https://via.placeholder.com/300x200?text=No+Image";
    }}
  />
</div>
      {soldOut ? (
        <p className="text-red-600 font-bold">SOLD OUT</p>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-yellow-400 px-3 py-1 mt-2 w-full"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;