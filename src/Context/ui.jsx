/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const UiContext = createContext()

export const UiProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  return (
    <UiContext.Provider value={{
      isCheckoutSideMenuOpen,
      isProductDetailOpen,

      /* Methods */
      closeCheckoutSideMenu,
      closeProductDetail,
      openCheckoutSideMenu,
      openProductDetail,
    }}>
      {children}
    </UiContext.Provider>
  )
}