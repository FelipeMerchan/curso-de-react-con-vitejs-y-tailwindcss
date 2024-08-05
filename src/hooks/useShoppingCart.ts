import { useContext } from "react"

import { ShoppingCartContext } from "../Context/shoppingCart"

export const useShoppingCart = () => {
  const shoppingCart = useContext(ShoppingCartContext);

  if (shoppingCart === undefined) {
    throw new Error('useShoppingCart must be used within a CartProvider')
  }

  return shoppingCart;
};