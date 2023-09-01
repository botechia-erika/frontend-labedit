import React from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { SubNavbar1 } from './styledLabecommerceRoutes'
import { Button } from '@chakra-ui/react'
import { goToHome } from '../../../router/coordinator'
import { goToCart, goToLogin, goToLabeEcommerce1 } from './coordinator2'
import { ProductDetails } from '../ProductDetails/ProductDetails'
export function LabeEcommerceRoutes () {
    const navigate = useNavigate()
    const {idDetails} = useParams()
  
    return (
    
        <SubNavbar1>
            <Button onClick={()=>{goToLabeEcommerce1(navigate)}}>Produtos</Button>
            <Button onClick={()=>{goToCart(navigate)}}>Compras</Button>
            <Button onClick={()=>{goToLogin(navigate, idDetails)}}>FrotaClub</Button>
            <Routes>
        <Route path="/labe-frota/login" element={<h2>login</h2>}/>
        <Route path="/labe-frota/details/:idDetails" element={<ProductDetails />}/>
        <Route path="/labe-frota/cart" element={<h2>login</h2>}/>
      
      </Routes>
        </SubNavbar1>
     )
}

