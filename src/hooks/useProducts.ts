import { useEffect, useState } from "react";

export const useProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}`)
        }

        return response.json();
      })
      .then((data) => {
        const mappedProducts = data.map((product) => ({
          category: product.category.name ?? '',
          description: product.description ?? '',
          id: product.id ?? '',
          image: product.images[0] ?? '',
          price: product.price ?? 0,
          title: product.title ?? '',
        }))
        setItems(mappedProducts)
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(true))
  }, [])

  return {
    items,
    loading,
    error,
  }
}
