import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchProduct } from "../services/api";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const load = async () => {
      const res = await fetchProduct(id);
      setProduct(res.data);
    };
    load();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6 flex gap-10 bg-gray-100 min-h-screen">
      <img
        src={product.image}
        className="w-80 h-80 object-contain bg-white p-4"
      />

      <div>
        <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-500 mb-4">{product.brand}</p>
        <p className="text-xl font-bold">₹ {product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>

        <p className="mt-4">{product.description}</p>

        <button
          className="mt-6 bg-yellow-400 px-6 py-2 rounded font-bold"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
