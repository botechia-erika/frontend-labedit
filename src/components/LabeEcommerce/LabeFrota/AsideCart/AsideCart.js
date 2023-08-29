import React, {useState} from 'react'
import styled from 'styled-components'
import {Heading, Box, Select ,Input} from '@chakra-ui/react'
const CartCtn = styled.aside`
min-height: 200px;
`


export function AsideCart({data, setData}) {
const [cotacao, setCotacao] = useState(0)
const handleSubmit = (e)=>{
    e.preventDefault()
    if(quantity < 1){
        alert('deve selecionar quantidade')
        return
    }
}


  return (
    <CartCtn>
    <Heading>
        <h3>Minha Cotação</h3>
    </Heading>
    <Box className='content'p={'10px'}>
        <div className='items'>
            <h2>Cotação</h2>
            <form onSubmit={handleSubmit}>
            <Select id="product" name="product" m={'10px auto'}>
                    <option value="0"> Produto Selecionado</option>
                {data.map((product)=>(
                    <option value={product.name}>{product.name}</option>  
                ))}
              </Select>      
                <Select id="quantity" name="quantity" m={'10px auto'}>
                    <option value="0"> Nro. de Meses</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">3</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </Select>
                <Input type="Submit" value={'cotacao'} placeholder={'fazer cotação'}/>
            </form>
        </div>
        <div className='buyItems'>
            <h3>Total a Pagar</h3>
            <p>{cotacao.toFixed(2)}</p>
        </div>
    </Box>
    </CartCtn>
  )
}
