import React from 'react'
import { Box, Input, Image, Button } from '@chakra-ui/react'
import { BankContainer } from './styledLogin'
import labebankIcon from "./../../../assets/icons/labebankIcon.png"
export function LoginBank() {
 
  return (
    <>
    <BankContainer >
    <Box mt={'auto'}  background={'orange'} height={'100vh'} fontSize={'1rem'} minW={'250px'} m={'auto'} w={'50%'} h={'100%'} justifyContent={'center'} alignContent={'center'} maxH={'90vh'} p={'100px auto'} display={'flex'} flexFlow={'column wrap'}>
       <form action="" method='post' p={'4rem'}>
       <p>
            <label for="username">Nome do Admin: </label>
            <Input type="text" bg={'white'} m={'10px auto'} id="nickname" name="nickname" w={'200px'} mb={'20px'}/>
          </p>
          <p>
            <label for="email">EMAIL do Admin: </label>
            <Input type="text" bg={'white'} m={'10px auto'} type="text" id="email" name="email" w={'200px'} mb={'20px'}/>
          </p>  
          <p>
            <label for="confirmPassword">Senha de Accesso </label>
            <Input type="text" bg={'white'} m={'10px auto'} type="text" id="confirmPassword" name="confirmPassword" w={'200px'}  mb={'20px'}/>
             </p>  
            
            <Button type="submit">Fazer Login</Button>
            
    </form>
    </Box>
    <Box mt={'auto'} fontSize={'1rem'}  minW={'250px'} m={'auto'} w={'50%'} h={'100%'} maxH={'90vh'} p={'100px auto'}>
      <Image src={ labebankIcon} alt="labe-bank logo"/>
      </Box>
</BankContainer>
</>
  )
}
