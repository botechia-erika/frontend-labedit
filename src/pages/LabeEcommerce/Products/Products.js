
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CtnLabeEcommerce } from "./styledLabeEcommerce";
import { CardList } from "../../../components/LabeEcommerce/CardList/CardList";
import { AsideCart } from "../../../components/LabeEcommerce/LabeFrota/AsideCart/AsideCart";
import { AsideLabecommerce } from "../../../components/LabeEcommerce/AsideLabecommerce/AsideLabecommerce";
import { Select } from "@chakra-ui/react";

import { CartItem } from "../../../components/LabeEcommerce/CartItem/CartItem";

export function Products() {
  const [cartList, setCartList] = useState([]);
  const [click, setClick] = useState("");
  const [items, setItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [trueCheckbox, setTrueCheckbox] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const getProducts = () => {
    fetch("http://localhost:3003/courses")
      .then((response) => response.json())
      .then((data) => setItems(data.result))
      .catch((error) => console.error(error));
  };
  const { idDetails } = useParams();

  useEffect(() => {
    getProducts();
  }, []);

  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const restCart = (cartItem) => {
    if (cartItem.quantity <= 1) {
      setCart(cart.filter((cartItems) => cartItems.id !== cartItem.id));
    } else {
      setCart(
        cart.map((productCart) =>
          productCart.id === cartItem.id
            ? { ...productCart, quantity: productCart.quantity - 1 }
            : productCart
        )
      );
    }
  };

  const orderPrice = () => {
    setItems([...items].sort((a, b) => (a.price > b.price ? -1 : 1)));
  };

  const orderPrice2 = () => {
    setItems([...items].sort((a, b) => (a.price > b.price ? 1 : -1)));
  };
  const filteredItems = items
    .filter(
      (item) =>
        !searchBrand ||
        item.name.toUpperCase().includes(searchBrand.toUpperCase())
    )
    .filter(
      (item) =>
        !searchName ||
        item.name.toUpperCase().includes(searchName.toUpperCase())
    );
  return (
    <CtnLabeEcommerce>
      <div class="parent">
        <header>
          <div pt={"20px"}>
            <h2>LabeFROTA</h2>
          </div>
        </header>
        <div class="left-side">
          <AsideCart data={items} setData={setItems} />
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
          <Select>
            <option id="b1" onClick={orderPrice}>
              MAIOR PRECO
            </option>
            <option onClick={orderPrice2}>MENOR PRECO</option>
          </Select>

          <ul>
            {[...cart].map((cartItem) => (
              <CartItem
                as="li"
                cartItem={cartItem}
                addCart={addCart}
                restCart={restCart}
              />
            ))}
          </ul>
        </div>
        <footer></footer>
      </div>
    </CtnLabeEcommerce>
  );
}
