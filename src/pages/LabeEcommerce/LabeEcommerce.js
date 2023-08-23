import React from 'react'
import { CtnLabeEcommerce } from './styledLabeEcommerce'
import {Button} from '@chakra-ui/react'
export function LabeEcommerce() {
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
   </div>
  <main>Main Content</main>
  <div class="right-side">Right Snidebar</div>
  <footer>
    <p>brand name </p>
    <span>&copy 2023</span>
  </footer>
</div>
    </CtnLabeEcommerce>
  )
}
