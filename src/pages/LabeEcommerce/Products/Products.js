import React , {useState, useEffect} from 'react'
import { CtnLabeEcommerce } from './styledLabeEcommerce'
import {CardList} from '../../../components/LabeEcommerce/CardList/CardList'
import { AsideCart } from '../../../components/LabeEcommerce/LabeFrota/AsideCart/AsideCart'
import { AsideLabecommerce } from '../../../components/LabeEcommerce/AsideLabecommerce/AsideLabecommerce'


export function Products() {

  const [ items, setItems] = useState([])
  const [searchName, setSearchName] = useState("")
  const getProducts = () => {
    fetch('http://localhost:3004/courses')
      .then(response => response.json())
      .then(data => setItems(data.result))
      .catch(error => console.error(error));
  };


  useEffect(() => {
    getProducts();

  }, []);



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
  <CardList item={item} key={item.id}/>
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
