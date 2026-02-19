import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [electronics, setElectronics] = useState([]);
  const [appliances, setAppliances] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [e, a] = await Promise.all([
        fetchProducts({ category: "electronics" }),
        fetchProducts({ category: "home-appliances" }),
      ]);

      setElectronics(e.data);
      setAppliances(a.data);
    };

    load();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-10 text-center text-xl font-semibold">
        Deals on Electronics & Home Appliances
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-6">Electronics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronics.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h2 className="text-xl font-bold mb-6">Home Appliances</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appliances.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
