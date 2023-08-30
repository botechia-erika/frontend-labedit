import { Button, Flex , Box, Heading} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToLabeEdit, goToLabeBooks, goToLabeEcommerce, goToLabeBank, goToLabeAdmin } from "../../router/coordinator";
import labeIcon1 from './../../assets/icons/labeIcon1.png'
import labeIcon2 from './../../assets/icons/labeIcon2.png'
import labeIcon3 from './../../assets/icons/labeIcon3.png'
import labebankIcon from './../../assets/icons/labebankIcon.png'
import labeAdminIcon from './../../assets/icons/labeAdminIcon.png'

import { useState } from "react";

export function Home() {
const listIcons = useState([labeIcon1, labeIcon2, labeIcon3])
const [goTo, setGoTo] = useState(['goToLabeEcommerce', 'goToLabeBooks', 'goToLabeEdit'])

  const navigate = useNavigate()
  return (
<>
<Heading minH={'20vh'} pt={'50px'}>
    <h2>LabeHome</h2>
</Heading>

<Flex flexFlow={'row wrap'} justifyContent={'space-around'} alignContent={'center'}
m={'60px auto'} height={'100%'}>
<Box w={'250px'} h={'250px'} bg={'orange.200'} m={'30px auto'} border={'2px solid orangered'} borderRadius={'22px'}>
<img src={labeIcon2} alt={"img do icon labe-ecommerce"} w={'80px'} h={'80px'}/>
<Button onClick={()=>{goToLabeEcommerce(navigate)}}>LabeFROTA</Button>
</Box>
<Box w={'250px'} h={'250px'} bg={'orange.200'} m={'30px auto'} border={'2px solid orangered'} borderRadius={'22px'}>
<img src={labeIcon3} alt={"img do icon labe-books"} w={'80px'} h={'80px'}/>
<Button onClick={()=>{goToLabeEdit(navigate)}}>LabeEdit</Button>
</Box>
<Box w={'250px'} h={'250px'} bg={'orange.200'} m={'30px auto'} border={'2px solid orangered'} borderRadius={'22px'}>
<img src={labeIcon1} alt={"img do icon labe-books"} w={'80px'} h={'80px'}/>
<Button onClick={()=>{goToLabeBooks(navigate)}}>LabeBooks</Button>
</Box>
<Box w={'250px'} h={'250px'} bg={'orange.200'} m={'30px auto'} border={'2px solid orangered'} borderRadius={'22px'}>
<img src={labebankIcon} alt={"img do icon labe-bank"} w={'80px'} h={'80px'}/>
<Button onClick={()=>{goToLabeBank(navigate)}}>LabeBank</Button>
</Box>
<Box w={'250px'} h={'250px'} bg={'orange.200'} m={'30px auto'} border={'2px solid orangered'} borderRadius={'22px'}>
<img src={labeAdminIcon} alt={"img do icon labe-books"} w={'80px'} h={'80px'}/>
<Button onClick={()=>{goToLabeAdmin(navigate)}}>LabeAdmin</Button>
</Box>

</Flex>

</>
  );
}
