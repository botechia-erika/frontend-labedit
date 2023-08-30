import React from 'react';
import { Input } from '@chakra-ui/react';

export function AsideLabecommerce({ searchName}) {
  return (
    <>
      <Input
        type="text"
        name="searchName"
        id="searchName"
        
        onChange={searchName}
        placeholder="Nome do Produto"
        bg="white"
        w="90%"
        margin="10px auto"
      />

      
    </>
  );
}
