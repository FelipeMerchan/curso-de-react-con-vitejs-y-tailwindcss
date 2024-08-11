/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  /* Product detail - show product */
  const [productToShow, setProductToShow] = useState({});
  /* Shopping Cart - Add products to cart */
  const [cartProducts, setCartProducts] = useState([]);

  const addProductsToCart = (productData) => {
    setCartProducts([...cartProducts, productData]);
    setCount(count + 1);
  }

  return (
    <ShoppingCartContext.Provider value={{
      cartProducts,
      count,
      productToShow,

      /* Methods */
      addProductsToCart,
      setCount,
      setProductToShow,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}