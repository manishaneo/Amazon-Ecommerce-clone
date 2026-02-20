import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import HeroSlider from "../components/HeroSlider";
import ProductRow from "../components/ProductRow";

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
    <div className="bg-gray-100">
      <HeroSlider />

      <ProductRow title="Best of Electronics" products={electronics} />
      <ProductRow title="Home Appliances" products={appliances} />

      <div className="bg-[#131A22] text-center text-white py-6 mt-10">
        © Amazon Clone by Manisha
      </div>
    </div>
  );
};

export default Home;
