import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProducts = (params) =>
  API.get("/products", { params });

/*import products from "../data/products";

export const fetchProducts = async (params = {}) => {
  let filtered = [...products];

  if (params.category) {
    filtered = filtered.filter(
      (p) => p.category === params.category
    );
  }

  if (params.search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(params.search.toLowerCase())
    );
  }

  if (params.min) {
    filtered = filtered.filter((p) => p.price >= Number(params.min));
  }

  if (params.max) {
    filtered = filtered.filter((p) => p.price <= Number(params.max));
  }

  return { data: filtered };
};
*/
