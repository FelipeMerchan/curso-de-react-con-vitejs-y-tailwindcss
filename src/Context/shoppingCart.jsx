/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
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
  /* Get products by title */
  const { search, setSearch } = useSearch();

  return (
    <ShoppingCartContext.Provider value={{
      cartProducts,
      count,
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