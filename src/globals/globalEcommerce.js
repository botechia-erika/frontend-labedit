import React, { createContext, useEffect, useState } from 'react';

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const getProducts = () => {
    fetch('http://localhost:3004/products')
      .then(response => response.json())
      .then(data => setProducts(data.result))
      .catch(error => console.error(error));
  };

  const getUsers = () => {
    fetch('http://localhost:3004/users')
      .then(response => response.json())
      .then(data => setUsers(data.result))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);


  const [items, setItems] = useState([...products])
 
  const addItems = (item)=>{      
      setItems([...items, item])
  }
  
  const deleteItems = (item)=>{
    setItems(item.filter((item=>item.name != item.name)))
  }
  

  

  
  
  return (
    <EcommerceContext.Provider value={{items, addItems, deleteItems}}>
      {children}
    </EcommerceContext.Provider>
  );
};