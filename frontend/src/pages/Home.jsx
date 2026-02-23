import { useInventory } from "../inventory/InventoryContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products } = useInventory();

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default Home;