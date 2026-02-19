import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const products = [
  {
    _id: "1",
    title: "Samsung Refrigerator",
    brand: "Samsung",
    category: "home-appliances",
    price: 32999,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    _id: "2",
    title: "iPhone 15",
    brand: "Apple",
    category: "electronics",
    price: 79999,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
  },
  {
    _id: "3",
    title: "Sony Headphones",
    brand: "Sony",
    category: "electronics",
    price: 5999,
    rating: 4.4,
    image: "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
  },
];

app.get("/api/products", (req, res) => {
  const { category, search, min, max } = req.query;

  let filtered = [...products];

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (min) {
    filtered = filtered.filter((p) => p.price >= Number(min));
  }

  if (max) {
    filtered = filtered.filter((p) => p.price <= Number(max));
  }

  res.json(filtered);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
