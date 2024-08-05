/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  /* Product detail - show product */
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{
      count,
      productToShow,

      /* Methods */
      setCount,
      setProductToShow,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}