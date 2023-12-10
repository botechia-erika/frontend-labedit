// ProductsContext.js
import React, { createContext, useState, useEffect } from 'react';
import { URLAPI } from '../../constants/URLAPI';
import { useRequestData } from '../../hooks/useRequestData';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [courses, isLoadingCourses, isErrorCourses] = useRequestData(`${URLAPI}courses`, []);
  const [products, setProducts] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchBrand, setSearchBrand] = useState('');

  const filterProducts = (name, brand) => {
    return courses.filter((product) => (
      (!name || product.name.toUpperCase().includes(name.toUpperCase())) &&
      (!brand || product.brand.toUpperCase().includes(brand.toUpperCase()))
    ));
  };

  const orderProducts = (isDescending) => {
    const sortedProducts = [...products].sort((a, b) =>
      isDescending ? b.price - a.price : a.price - b.price
    );
    setProducts(sortedProducts);
  };

  const handleSearchName = (name) => {
    setSearchName(name);
    setProducts(filterProducts(name, searchBrand));
  };

  useEffect(() => {
    if (courses.length > 0) {
      setProducts(filterProducts(searchName, searchBrand));
    }
  }, [courses, searchName, searchBrand]);

  const contextValue = {
    products,
    setProducts,
    courses,
    isLoadingCourses,
    isErrorCourses,
    filterProducts,
    setSearchName,
    setSearchBrand,
    orderProducts,
    handleSearchName,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
