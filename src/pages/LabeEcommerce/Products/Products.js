import React , {useState, useEffect} from 'react'
import { CtnLabeEcommerce } from './styledLabeEcommerce'
import {CardList} from '../../../components/LabeEcommerce/CardList/CardList'
import { AsideCart } from '../../../components/LabeEcommerce/LabeFrota/AsideCart/AsideCart'
import { AsideLabecommerce } from '../../../components/LabeEcommerce/AsideLabecommerce/AsideLabecommerce'


export function Products() {
  const [cartList, setCartList] = useState([])
const [click, setClick] = useState('')
  const [ items, setItems] = useState([])
  const [searchName, setSearchName] = useState("")
  const [carrinho, setCarrinho] = useState([])
  const getProducts = () => {
    fetch('http://localhost:3003/products')
      .then(response => response.json())
      .then(data => setItems(data.result))
      .catch(error => console.error(error));
  };


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

  return (

    <CtnLabeEcommerce>


  <div class="parent">
  <header>
    <div pt={'20px'}>
    <h2>LabeFROTA</h2>
    </div>
  </header>
  <div class="left-side"><AsideCart data={items} setData={setItems}/>
   </div>
  <main>
  {items.filter((item)=>{
        if(searchName && item.name.toUpperCase().includes(searchName.toUpperCase())) {
          return item
        }else if(!searchName){
          return items
        }
      }).map(item=>(
  <CardList item={item} 
    key={item.id}
    addCart={addCart}
    click={click}

  />
))}
  </main>

  
  <div class="right-side">
  <AsideLabecommerce searchName={(e)=>setSearchName(e.target.value)}/>
  </div>
  <footer>
 
  </footer>
</div>
    </CtnLabeEcommerce>
  )
}
