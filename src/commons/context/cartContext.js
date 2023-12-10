// ProductsContext.js
import React, { createContext, useState, useEffect } from 'react';
import { URLAPI } from '../../constants/URLAPI';
import { useRequestData } from '../../hooks/useRequestData';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
