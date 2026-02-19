import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [electronics, setElectronics] = useState([]);
  const [appliances, setAppliances] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [electronicsRes, appliancesRes] = await Promise.all([
        fetchProducts({ category: "electronics" }),
        fetchProducts({ category: "home-appliances" }),
      ]);

      setElectronics(electronicsRes.data);
      setAppliances(appliancesRes.data);
    };

    loadData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Electronics</h2>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {electronics.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Home Appliances</h2>
      <div className="grid grid-cols-4 gap-6">
        {appliances.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
