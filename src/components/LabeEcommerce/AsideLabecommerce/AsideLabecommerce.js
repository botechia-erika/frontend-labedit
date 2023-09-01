import React from 'react';
import { Input } from '@chakra-ui/react';
import brands from  '../../../constants/brands'
import { Select } from '@chakra-ui/react';
import priceCategory from '../../../constants/priceCategory'
export function AsideLabecommerce({ searchName, searchBrand,searchPriceRange}) {




  return (
    <div>
      <Input
        type="text"
        name="searchName"
        id="searchName"
        
        onChange={searchName}
        placeholder="MODELO MARCA ANO"
        bg="white"
        w="90%"
        margin="10px auto"
      />
      <Select id="brand" name="brand" m={'10px auto'}
      onChange={searchBrand}
      >
                    <option value="" selected disabled> MARCAS </option>
                    <option value=""> QUALQUER MARCA </option>
                    {brands.map((brandcar, indice)=>(
                    <option value={brandcar}>{indice} - {brandcar}</option>
                    ))}
                </Select>

      

    </div>
  );
}
