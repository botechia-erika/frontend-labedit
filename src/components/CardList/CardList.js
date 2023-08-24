import React from 'react'
import { CardsCtn } from './styledCardList'
function CardList({items}) {
  return (
    <CardsCtn>
    <ul>  
    {items.map(item=>(
        <li key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <p>Alugue Mensal</p>
            <img src={item.image_url} alt={'imagem do produto'}/>
           
              <p>R$: {item.price.toFixed(2)}</p>
              <p>{item.description}</p>
              <button>Alugue</button>
              <button>Favoritos</button>
          </div>
        </li>
      ))}
</ul>
</CardsCtn>
  )
}

export default CardList
