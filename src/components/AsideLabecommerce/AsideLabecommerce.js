import React from 'react'
import {Input} from '@chakra-ui/react'
export function AsideLabecommerce  ({searchName , setSearchName}) {

  return (
    <>
    <input type="number"/>

    <Input type="text" name="searchName" id="searchName" value={searchName}
        onChange={(e)=> setSearchName(e.target.value)} placeholder={"Nome do Produto"}
        bg={"white"} w={"90%"} margin={'10px auto'}
        />
    </>
    )}