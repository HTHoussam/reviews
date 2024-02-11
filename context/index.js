import { Axios } from "axios";
import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
const context = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = axios.get("https://dummyjson.com/products");
      if (result) {
        setProducts(result.products);
      }
    }
    fetchData();
  }, []);
  return <context.Provider value={products}>{children}</context.Provider>;
};
