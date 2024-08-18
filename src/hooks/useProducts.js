import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export const useProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getProducts()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, []);

  return {
    items,
    loading,
    error,

    /* Methods */
    setItems,
  }
}
