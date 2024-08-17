/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  /* Product detail - show product */
  const [productToShow, setProductToShow] = useState({});
  /* Shopping Cart - Add products to cart */
  const [cartProducts, setCartProducts] = useState([]);
  /* Shopping Cart - Order */
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      cartProducts,
      count,
      order,
      productToShow,

      /* Methods */
      setCartProducts,
      setCount,
      setOrder,
      setProductToShow,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}