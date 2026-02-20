import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-4 rounded shadow hover:shadow-lg transition-transform hover:scale-105 duration-200 cursor-pointer"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <img
        src={product.image}
        className="w-full h-48 object-contain mb-3"
      />
      <h2 className="font-semibold">{product.title}</h2>
      <p className="text-gray-500 text-sm">{product.brand}</p>
      <p className="font-bold mt-2">₹ {product.price}</p>
      <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
    </div>
  );
};

export default ProductCard;
