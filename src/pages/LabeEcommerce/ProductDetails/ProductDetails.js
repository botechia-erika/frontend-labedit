import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { DetailsCtn } from './styledDetails'
import { LabeEcommerceRoutes } from '../routes/LabeEcommerceRoutes'
import {  Box , Flex, Heading, Image, Button, Input, Select} from '@chakra-ui/react'
import axios from 'axios'
import { URLAPI } from '../../../constants/URLAPI'
export function ProductDetails() {
  const [cartList, setCartList] = useState([])
const [click, setClick] = useState('')
  const [ items, setItems] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchBrand, setSearchBrand] = useState("")
  const [trueCheckbox, setTrueCheckbox] = useState(false)
  const [carrinho, setCarrinho] = useState([])
  const [quantity, setQuantity] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
const {idDetails} = useParams()

console.log(idDetails)
const [productItem, setProductItem] = useState({description: "", id: "",image_url: "", name: "", price: 0})
useEffect(() => {
    axios
      .get(`${URLAPI}/products/${idDetails}`)
      .then((response) => {
        setProductItem(response.data.product[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

console.log(productItem)

  function addCart(item){
    const searchAtCart = carrinho.find(cartItem=>{cartItem.id === item.id})
    if(!searchAtCart){
      console.log('novo item')
    }else{
      console.log('item existe')
    }
  }


 const orderPrice = () => {
  setItems(
    [...items].sort((a, b) => (a.price > b.price ? -1 : 1))
  );
};
const orderPrice2 = () => {
  setItems(
  [...items].sort((a, b) => (a.price > b.price ? 1 : -1))
  );
};
  return (

    <DetailsCtn>
    <div></div>
    <div>
      <Flex flexFlow={"row wrap"} justifyContent={"center"} alignSelf={'center'} >
        <Box w={'40%'} minW={'420px'} minH={'570px'} >
        <Heading m={'30px auto'} textAlign={'center'}>
          <h2>{productItem.name}</h2>
        </Heading>
          <Image src={productItem.image_url} alt={'img do produto'}/>

        </Box>

        <Box w={'40%'} minW={'420px' } minH={'570px'} >
 <h3> Ficha Tecnica <br/><hr/> {productItem.name}</h3>
<p>Mensalidade R$:{productItem.price.toFixed(2).replace(".", ",")}  </p>
<p>Categoria: {productItem.description}</p>


<Box bg={'whitesmoke'} m={'40px auto'}>
  <h4>PEDIDO DE LOCAÇÃO</h4>
<form>
    <label mt={'10px'}>
    <label htmlFor='inputProduct'>Nome do Produto</label>
    <Input type='text' name="inputProduct" id="inputProduct"  value={productItem.name} 
    mt={'20px'} w={'70%'} disabled
    color={'black'}
    />
    </label>
    <Flex justifyContent={'space-between'} mb={'10px'}>    <label htmlFor='inpuQuantity'>Numero de Meses Contratados</label>
    <Select w={'30%'}>
    <option id="inputQuantity" name="inputQuantity" value="Number{0}" selected disabled>0</option>
    {quantity.map((q)=>
    <option id="inputQuantity" name="inputQuantity" value="Number{q}">{q}</option>
    )}
    </Select>
    
    </Flex>
    <Flex justifyContent={'space-between'} mb={'10px'}>    
    <label htmlFor='inpuQuantity'>Numero de Parcelas</label>
    <Select w={'30%'}>
    <option id="inputQuantity" name="inputQuantity" value="Number{0}" selected disabled>0</option>
    {quantity.map((q)=>
    <option id="inputQuantity" name="inputQuantity" value="Number{q}">{q}</option>
    )}
    </Select>

    <hr/>
    </Flex> 
    <p>    
    <label htmlFor='inpuQuantity'>Selecione o Numero de Parcelas</label>
    <Input type='text' name="inputQuantity" id="inputQuantity"   
    mt={'20px'} w={'10%'} placeholder="ex: 1"
    color={'black'}
    />
    </p> 
  <Button>ALUGAR</Button>
</form>
</Box>

        </Box>
        
      </Flex>
    </div>
    <div></div>
    </DetailsCtn>
  )
}
