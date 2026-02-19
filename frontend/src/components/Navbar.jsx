import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/category/all?search=${search}`);
    }
  };

  return (
    <div className="bg-[#131921] text-white px-6 py-3 flex items-center justify-between">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Amazon
      </h1>

      <form onSubmit={handleSearch} className="w-1/2 mx-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="font-semibold cursor-pointer">Cart</div>
    </div>
  );
};

export default Navbar;
