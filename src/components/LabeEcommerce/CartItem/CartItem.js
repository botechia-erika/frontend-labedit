import React from "react";

export const CartItem = ({ cartItem, addCart, restCart }) => {
  return (
    <>
      <h2>{cartItem.name}</h2>
      <p>PERIODO CONTRATO: {cartItem.quantity}</p>
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
        -1 MES
      </button>
      <p>{Number(cartItem.price) * Number(cartItem.quantity)}</p>
      <button>Fechar Pedido</button>
    </>
  );
};
