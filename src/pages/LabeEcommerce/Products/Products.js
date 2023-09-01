import React , {useState, useEffect} from 'react'
import { CtnLabeEcommerce } from './styledLabeEcommerce'
import {CardList} from '../../../components/LabeEcommerce/CardList/CardList'
import { AsideCart } from '../../../components/LabeEcommerce/LabeFrota/AsideCart/AsideCart'
import { AsideLabecommerce } from '../../../components/LabeEcommerce/AsideLabecommerce/AsideLabecommerce'


export function Products() {

  const [ items, setItems] = useState([])
  const [searchName, setSearchName] = useState("")
  const getProducts = () => {
    fetch('http://localhost:3003/products')
      .then(response => response.json())
      .then(data => setItems(data.result))
      .catch(error => console.error(error));
  };


  useEffect(() => {
    getProducts();

  }, []);
  const priceValue = (cartItem) => {
    return cartItem.price * cartItem.quantity;
  };

  const [cart, setCart] = React.useState([]);
  // se adicion um item ao carrinho
  const addCart = (item) => {
    // busco em array de carrito se existe algum itemCart com id equivalente ao item
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      // se some me retorna true atualizo quantidade para este item em +1
      setCart(
          [...cart].map((cartItem) => {
            if (cartItem.id === item.id) {
              cartItem.quantity++;
              return cartItem;
            }
            return cartItem;
          })
      );
    } else {
      setCart((currentState) => [...currentState, { ...item, quantity: 1 }]);
    }
  };

  const restCart = (cartItem) => {
    if (cartItem.quantity <= 1) {
      setCart((currentState) =>
          [...currentState].filter((cartItems) => cartItems.id != cartItem.id)
      );
    } else {
      setCart((currentState) => {
        return [...currentState].map((productCart) => {
          if (productCart.id === cartItem.id) {
            productCart.quantity -= 1;
          }
          return productCart;
        });
      });
    }
  };



  return (

    <CtnLabeEcommerce>


  <div class="parent">
  <header>
    <div pt={'20px'}>
    <h2>LabeFROTA</h2>
    </div>
  </header>
  <div class="left-side">
    <ul>
      {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <h2>{cartItem.name}</h2>

            <p>PERIODO CONTRATO {cartItem.quantity} (EM MESES)</p>
            <p>{priceValue(cartItem)}</p>
            <button
                onClick={() => {
                  addCart(cartItem);
                }}
            >
              +1 MES
            </button>

            <button
                onClick={() => {
                  restCart(cartItem);
                }}
            >
              <i className="fa-solid fa-circle-minus"></i> 1
            </button>
            <button>Fechar Pedido</button>
          </li>
      ))}
    </ul>

   </div>
  <main>
  {items.filter((item)=>{
        if(searchName && item.name.toUpperCase().includes(searchName.toUpperCase())) {
          return item
        }else if(!searchName){
          return items
        }
      }).map(item=>(
  <CardList item={item} key={item.id}  addCart={()=>{addCart(item)}}/>
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
