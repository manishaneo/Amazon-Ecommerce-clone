import connectDB from "./src/config/db.js";
import Product from "./src/models/Product.js";
import Inventory from "./src/models/Inventory.js";

const products = [
  {
    title: "iPhone 15",
    brand: "Apple",
    category: "electronics",
    price: 79999,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81CgtwSii7L._SX679_.jpg"
    ],
    description: "The latest iPhone with A16 Bionic chip and improved camera."
  },
  {
    title: "Sony Headphones",
    brand: "Sony",
    category: "electronics",
    price: 5999,
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/61u48FEs0rL._SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61u48FEs0rL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71p2cJ36NGL._SX679_.jpg"
    ],
    description: "Noise cancelling wireless headphones by Sony."
  },
  {
    title: "Samsung Refrigerator",
    brand: "Samsung",
    category: "home-appliances",
    price: 32999,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71g94Jk5vCL._SX679_.jpg"
    ],
    description: "Samsung double-door refrigerator with inverter technology."
  },
  {
    title: "Men's Casual Shirt",
    brand: "Dennis Lingo",
    category: "fashion",
    price: 799,
    rating: 4.2,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9tj0uh2wtAP6b2LWVU3hit1gNnszhpq-2kh8D_ar2tjwAhH_nv1JG-xtDErid__bT5pkDUHWd06_MwvEHE2gTTlRUpDXXzF4Aw57HMKuvbYPLexU_BWIo0g&usqp=CAc",
    images: [
      "https://m.media-amazon.com/images/I/71k9g+btNCL._UY679_.jpg",
      "https://m.media-amazon.com/images/I/61tw5h6pEQL._UY741_.jpg"
    ],
    description: "Cotton slim-fit men's shirt."
  },
  {
    title: "Women’s Kurti",
    brand: "Ahalyaa",
    category: "fashion",
    price: 999,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHywcNDzpPZMPoj0yobKOcEfLUG4Z8rpOYaQ&s",
    images: [
      "https://m.media-amazon.com/images/I/717pJZVR58L._UY679_.jpg",
      "https://m.media-amazon.com/images/I/71YpWrswApL._UY679_.jpg"
    ],
    description: "Designer kurti for women."
  },
  {
    title: "Prestige Non-stick Kadai",
    brand: "Prestige",
    category: "kitchen",
    price: 1499,
    rating: 4.5,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSb74bbVNwQuRFzZmrKj_7Dn2lHov1Psw2hqO7Jnd8j98dvN-irOQvc5o5o_yjrS9Lf3PiPYCb8LlCH8JYkwzQfjBRDdEv9yyoQ2KkGvQ7CrlnsVuh4JjqCWwuJZRp1nKuAvx6J2PsM_Rs&usqp=CAc",
    images: [
      "https://m.media-amazon.com/images/I/71oVYDs2fzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71U18OnQuGL._SX679_.jpg"
    ],
    description: "Non-stick kadai with lid."
  },
  {
    title: "Hawkins Pressure Cooker 3L",
    brand: "Hawkins",
    category: "kitchen",
    price: 2199,
    rating: 4.6,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYamtpvGkNmbsXG-CxxAI5vVsONdbbl52LIcnrUdRFWq7R5lEpoqKrHuoLErRxoIAhTfOJ5xcThBigqYp99IPUOpBLNSihWR-yXmppCuZvLrW0aaqk9LgtE1gs1zPdRUtnAhZGZ_UHow&usqp=CAc",
    images: [
      "https://m.media-amazon.com/images/I/61V9iS8Ez7L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71OHaDdyC-L._SX679_.jpg"
    ],
    description: "Aluminium pressure cooker."
  },
  {
    title: "JBL Bluetooth Speaker",
    brand: "JBL",
    category: "deals",
    price: 1999,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3iGGjEhQOKIUPJn4EgsaPlL0ehnBcsunZ5N_SqsR3cVTIiiO-pC9DRhUNxIHHI2069F1I95rFtqUx9Fpc9MSk1PNLRPIBvWgWPy9t_as7YfH1xlKtD6LandDhfbQ3V7kGIKmaRH4&usqp=CAc",
    images: [
      "https://m.media-amazon.com/images/I/61jA3B0o3NL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71rJxT2kvbL._SX679_.jpg"
    ],
    description: "Portable wireless speaker on discount."
  },
  {
    title: "Fire-Boltt Smartwatch",
    brand: "Fire-Boltt",
    category: "deals",
    price: 1299,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRar1hE7Dc2fPKjseH7Yy-k5ukKs2uSZu4_1g&s",
    images: [
      "https://m.media-amazon.com/images/I/61m6Uj4rbJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/616AyUkXIQL._SX679_.jpg"
    ],
    description: "Smartwatch on sale deal."
  }
];

const run = async () => {
  await connectDB();

  await Product.deleteMany();
  const inserted = await Product.insertMany(products);

  await Inventory.deleteMany();
  for (let p of inserted) {
    await Inventory.create({ productId: p._id, stock: 3 });
  }

  console.log("Seed completed");
  process.exit();
};

run();