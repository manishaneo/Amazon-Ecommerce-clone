import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { categoryName } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const search = query.get("search");
  const min = query.get("min");
  const max = query.get("max");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchProducts({
        category: categoryName,
        search,
        min,
        max,
      });
      setProducts(res.data);
    };
    load();
  }, [categoryName, search, min, max]);

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold capitalize mb-6">{categoryName}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Category;
