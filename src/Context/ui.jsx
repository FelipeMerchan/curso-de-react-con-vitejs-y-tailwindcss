/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const UiContext = createContext()

export const UiProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <UiContext.Provider value={{
      isProductDetailOpen,

      /* Methods */
      closeProductDetail,
      openProductDetail,
    }}>
      {children}
    </UiContext.Provider>
  )
}