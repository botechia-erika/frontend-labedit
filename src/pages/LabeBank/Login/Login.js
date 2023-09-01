import React from 'react'
import { Box, Input } from '@chakra-ui/react'
export function LoginBank() {
  return (
    <Box mt={'150px'} p={'2rem'} fontSize={'1rem'}>
       <form action="" method='post'>
       <p>
            <label for="username">Nome do Admin: </label>
            <Input type="text" id="nickname" name="nickname" w={'200px'} mb={'20px'}/>
          </p>
          <p>
            <label for="email">EMAIL do Admin: </label>
            <Input type="text" id="email" name="email" w={'200px'} mb={'20px'}/>
          </p>  
          <p>
            <label for="confirmPassword">Senha de Accesso </label>
            <Input type="text" id="confirmPassword" name="confirmPassword" w={'200px'}  mb={'20px'}/>
             </p>  
            
            <button type="submit">Fazer Login</button>
            
    </form>
    </Box>
  )
}
