import { useNavigate } from "react-router-dom";

const categories = [
  "all",
  "electronics",
  "home-appliances",
  "fashion",
  "kitchen",
  "deals"
];

const CategoryMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#232F3E] text-white px-6 py-2 flex gap-6 text-sm">
      {categories.map((c) => (
        <span
          key={c}
          className="cursor-pointer capitalize hover:underline"
          onClick={() => navigate(`/category/${c}`)}
        >
          {c}
        </span>
      ))}
    </div>
  );
};

export default CategoryMenu;
