import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { categoryName } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const search = queryParams.get("search");
  const min = queryParams.get("min");
  const max = queryParams.get("max");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchProducts({
        category: categoryName !== "all" ? categoryName : undefined,
        search,
        min,
        max,
      });

      setProducts(res.data);
    };

    loadProducts();
  }, [categoryName, search, min, max]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4 capitalize">
        {categoryName}
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Category;
