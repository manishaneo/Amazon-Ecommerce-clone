import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/category/all?search=${search}`);
  };

  return (
    <div className="bg-[#131921] text-white px-4 py-3 flex items-center gap-4 sticky top-0 z-50">

      {/*Logo*/}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        amazon.in
      </h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex-1">
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full px-4 py-2 rounded bg-white text-black text-sm focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {/* Cart */}
      <div
        className="cursor-pointer text-sm"
        onClick={() => navigate("/cart")}
      >
        Cart
      </div>
    </div>
  );
};

export default Navbar;
