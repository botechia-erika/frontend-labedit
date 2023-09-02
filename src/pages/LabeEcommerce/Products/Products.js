import React, { useState, useEffect } from 'react';
import { CtnLabeEcommerce } from './styledLabeEcommerce';
import { CardList } from '../../../components/LabeEcommerce/CardList/CardList';
import { AsideCart } from '../../../components/LabeEcommerce/LabeFrota/AsideCart/AsideCart';
import { AsideLabecommerce } from '../../../components/LabeEcommerce/AsideLabecommerce/AsideLabecommerce';

export function Products() {
  const [items, setItems] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchBrand, setSearchBrand] = useState('');

  const getProducts = () => {
    fetch('http://localhost:3003/products')
        .then((response) => response.json())
        .then((data) => setItems(data.result))
        .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const priceValue = (cartItem) => {
    return cartItem.price * cartItem.quantity;
  };

  const [cart, setCart] = React.useState([]);

  const addCart = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      setCart((currentState) =>
          currentState.map((cartItem) =>
              cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
          )
      );
    } else {
      setCart((currentState) => [...currentState, { ...item, quantity: 1 }]);
    }
  };

  const removeCartItem = (cartItem) => {
    if (cartItem.quantity <= 1) {
      setCart((currentState) =>
          currentState.filter((item) => item.id !== cartItem.id)
      );
    } else {
      setCart((currentState) =>
          currentState.map((item) =>
              item.id === cartItem.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
          )
      );
    }
  };

  const filteredItems = items
      .filter((item) =>
          !searchBrand || item.name.toUpperCase().includes(searchBrand.toUpperCase())
      )
      .filter((item) =>
          !searchName || item.name.toUpperCase().includes(searchName.toUpperCase())
      );

  return (
      <CtnLabeEcommerce>
        <div className="parent">
          <header>
            <div mt={'50px'} height={'556px'}>
              <h2>LabeFROTA</h2>
            </div>
          </header>
          <div className="left-side">
            <ul>
              {cart.map((cartItem) => (
                  <li key={cartItem.id}>
                    <h2>{cartItem.name}</h2>
                    <p>PERIODO CONTRATO {cartItem.quantity} (EM MESES)</p>
                    <p>{priceValue(cartItem)}</p>
                    <button onClick={() => addCart(cartItem)}>+1 MES</button>
                    <button onClick={() => removeCartItem(cartItem)}>
                      <i className="fa-solid fa-circle-minus"></i> 1
                    </button>
                    <button>Fechar Pedido</button>
                  </li>
              ))}
            </ul>
          </div>
          <main>
            {filteredItems.map((item) => (
                <CardList item={item} key={item.id} addCart={() => addCart(item)} />
            ))}
          </main>
          <div class="right-side">
            <AsideLabecommerce
                searchName={(e) => setSearchName(e.target.value)}
                searchBrand={(e) => setSearchBrand(e.target.value)}
            />
          </div>
          <footer></footer>
        </div>
      </CtnLabeEcommerce>
  );
}
