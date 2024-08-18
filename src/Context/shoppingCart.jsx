/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useSearch } from '../hooks/useSearch';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  /* Product detail - show product */
  const [productToShow, setProductToShow] = useState({});
  /* Shopping Cart - Add products to cart */
  const [cartProducts, setCartProducts] = useState([]);
  /* Shopping Cart - Order */
  const [order, setOrder] = useState([]);
  /* Get products */
  const { items, loading: getProductsLoading, error: getProductsError, setItems } = useProducts();
  const [filteredItems, setFilteredItems] = useState(null);
  /* Get products by title */
  const { search, setSearch } = useSearch();

  const filterItemsByTitle = useCallback((items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }, []);

  useEffect(() => {
    if (search) {
      setFilteredItems(filterItemsByTitle(items, search));
    }
  }, [items, search, filterItemsByTitle])

  return (
    <ShoppingCartContext.Provider value={{
      cartProducts,
      count,
      filteredItems,
      getProductsError,
      getProductsLoading,
      items,
      order,
      productToShow,
      search,

      /* Methods */
      setCartProducts,
      setCount,
      setItems,
      setOrder,
      setProductToShow,
      setSearch,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}