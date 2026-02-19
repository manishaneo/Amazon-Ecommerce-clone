const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
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
