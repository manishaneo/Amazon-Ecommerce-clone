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
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <h1 onClick={() => navigate("/")} className="cursor-pointer">
        Amazon
      </h1>

      <form onSubmit={handleSearch} className="w-1/2">
        <input
          className="w-full p-2 text-black"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div>Cart</div>
    </div>
  );
};

export default Navbar;
