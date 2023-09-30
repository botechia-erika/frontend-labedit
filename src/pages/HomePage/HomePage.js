import { Button, Flex , Box, Heading} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {goToLogin,  goToLabeEdit, goToLabeBooks, goToLabeEcommerce, goToLabeBank, goToLabeAdmin } from "../../router/coordinator";
import labeIcon1 from './../../assets/icons/labeIcon1.png'
import logo1 from './../../assets/brand/logo1.png'
import icon3Club from './../../assets/icons/icon3Club.png'
import logo2 from './../../assets/brand/logo2.png'
import labeAdminIcon from './../../assets/icons/labeAdminIcon.png'
import { TitleApi } from "./styled.HomePage";
import { useState } from "react";

export function HomePage() {
const listIcons = useState([logo1, logo2])
const [goTo, setGoTo] = useState(['goToLabeEcommerce', 'goToLabeBooks', 'goToLabeEdit'])

  const navigate = useNavigate()
  return (
<>

    <TitleApi>
      
      <h2 className="text-shadow-drop-center">Orange<strong>CAR</strong></h2>
      
  </TitleApi>


<Flex flexFlow={'row wrap'} justifyContent={'space-around'} alignContent={'center'}
m={'10px auto'} height={'100%'}>
<Box w={'250px'} h={'250px'} bg={'black.200'} m={'30px auto'} border={'2px solid black.200'} borderRadius={'22px'}>
<img src={icon3Club} alt={"img do icon orangeClub"}  maxW={'80px'} maxH={'80px'} objectFit={"cover"}/>
<Button onClick={()=>{goToLogin(navigate)}}>OrangeClub</Button>
</Box>

<Box w={'250px'} h={'250px'} bg={'black.200'} m={'30px auto'} border={'2px solid black.200'} borderRadius={'22px'}>
<img src={logo1} alt={"img do icon labe-ecommerce"} maxW={'80px'} maxH={'80px'} objectFit={"cover"}/>
<Button onClick={()=>{goToLabeEcommerce(navigate)}}>LabeFROTA</Button>
</Box>


<Box w={'250px'} h={'250px'} bg={'black.200'} m={'30px auto'} border={'2px solid black.200'} borderRadius={'22px'}>
<img src={labeAdminIcon} alt={"img do icon labe-ecommerce"} maxW={'80px'} maxH={'80px'} objectFit={"cover"}/>
<Button onClick={()=>{goToLabeEcommerce(navigate)}}>LabeFROTA</Button>
</Box>


</Flex>

</>
  );
}
