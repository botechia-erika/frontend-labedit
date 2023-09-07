import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


import { LabeEcommerceRoutes } from '../routes/LabeEcommerceRoutes'
export function ProductDetails({item}) {
  const [cartList, setCartList] = useState([])
const [click, setClick] = useState('')
  const [ items, setItems] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchBrand, setSearchBrand] = useState("")
  const [trueCheckbox, setTrueCheckbox] = useState(false)
  const [carrinho, setCarrinho] = useState([])
  const getProducts = () => {
    fetch('http://localhost:3003/products')
      .then(response => response.json())
      .then(data => setItems(data.result))
      .catch(error => console.error(error));
  };
const {idDetails} = useParams()



  
  useEffect(() => {
    getProducts();

  }, []);

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
    <h2>FICHA TECNICA</h2>

    </DetailsCtn>
  )
}
