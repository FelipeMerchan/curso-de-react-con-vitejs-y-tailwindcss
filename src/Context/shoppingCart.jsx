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
  /* Get products by category */
  const [searchByCategory, setSearchByCategory] = useState('');

  const filterItemsByTitle = useCallback((items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }, []);

  const filterItemsByCategory = useCallback((items, searchByCategory) => {
    return items?.filter((item) => item.category.toLowerCase().includes(searchByCategory.toLowerCase()));
  }, []);

  const filterBy = useCallback((searchType, items, search, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filterItemsByTitle(items, search)
    }

    if (searchType === 'BY_CATEGORY') {
      return filterItemsByCategory(items, searchByCategory)
    }

    if (!searchType) {
      return items;
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filterItemsByCategory(items, searchByCategory).filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    }
  }, [filterItemsByCategory, filterItemsByTitle]);

  useEffect(() => {
    if (search && !searchByCategory) {
      setFilteredItems(filterBy('BY_TITLE', items, search, searchByCategory));
    }

    if (searchByCategory && !search) {
      setFilteredItems(filterBy('BY_CATEGORY', items, search, searchByCategory));
    }
  
    if (searchByCategory && search) {
      setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, searchByCategory));
    }

    if (!searchByCategory && !search) {
      setFilteredItems(filterBy(null, items, search, searchByCategory));
    }
  }, [items, search, filterBy, searchByCategory])
  

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
      searchByCategory,

      /* Methods */
      setCartProducts,
      setCount,
      setItems,
      setOrder,
      setProductToShow,
      setSearch,
      setSearchByCategory,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}