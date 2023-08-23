import React , {useState, useEffect} from 'react'
import { CtnLabeEcommerce } from './styledLabeEcommerce'
import {Button} from '@chakra-ui/react'
import CardList from '../../components/CardList/CardList'
import { AsideLabecommerce } from '../../components/AsideLabecommerce/AsideLabecommerce'
export function LabeEcommerce() {

  const [ items, setItems] = useState([])
  const [searchName, setSearchName] = useState("")
useEffect(() => {
  fetch("http://localhost:3003/products")
  .then(response => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
  .then(data => setItems(data.result))
},[])



  return (
    <CtnLabeEcommerce>
    

  <div class="parent">
  <header>
    <h1>LabeEcommerce</h1>
    <span>
      <Button>TrackOffers</Button>
      <Button>Snippets</Button>
      <Button>ToolsAndTips</Button>
      <Button>ColabCLUB</Button>
    </span>


  </header>
  <div class="left-side">
      <AsideLabecommerce setSearchName={setSearchName} searchName={searchName}/>
   </div>
  <main>
  
  <CardList items={items}/>
  
  </main>
  <div class="right-side">Right Snidebar</div>
  <footer>
 
  </footer>
</div>
    </CtnLabeEcommerce>
  )
}
