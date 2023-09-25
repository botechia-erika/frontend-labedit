import { useState } from "react";
import { HeaderCtn } from "./styledHeader";
import { goToHome, goToSignIn, goToSignUp } from '../../router/coordinator';
import { useNavigate } from "react-router-dom";
import {Button, Flex, Image} from '@chakra-ui/react'

import logoBrand from './../../assets/brand/logoBrand.png'
export function Header() {
  const navigate = useNavigate();

  const onLogout = ()=>{
    console.log('logout')
  }
  return (
    <HeaderCtn>
     <Flex bg={' #434343'}>
      <Image src={logoBrand} alt={"logo orange car"} w={'75px'} height={'65px'} borderRadius={'15px'}/>
     </Flex>
    <nav>
    <Button onClick={()=>{goToHome(navigate)}}>Home</Button>
    <Button onClick={()=>{goToSignUp(navigate)}}>Cadastro</Button>
    
    <Button onClick={()=>{goToSignIn(navigate)}}>Login</Button>
    <Button onLogout={onLogout}>Logout</Button>
    </nav>
</HeaderCtn>    
  );
}
