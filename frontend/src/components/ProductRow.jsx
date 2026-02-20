import ProductCard from "./ProductCard";

const ProductRow = ({ title, products }) => {
  return (
    <div className="px-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex overflow-x-scroll gap-6 pb-4">
        {products.map((p) => (
          <div key={p._id} className="min-w-[250px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
