import React from 'react';
import {Input, Select} from '@chakra-ui/react';
import {CarBrand} from "../../../constants/CarBrand";

export function AsideLabecommerce({ searchName, searchBrand}) {
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
      <Select
        onChange={searchBrand}
      >
      <option value={""}>Marcas</option>
          {CarBrand.map((brand, indice)=>(
            <option value={brand}  key={indice}>{brand}</option>
              )
          )}
      </Select>

    </>
  );
}
