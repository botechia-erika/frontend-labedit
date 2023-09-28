import React from "react";
import { Input } from "@chakra-ui/react";
export function NewPayment() {
  return (
    <section className="col-12 ">
      <h2> Novo Pagamento</h2>
      <form action="" method="post" className="formulario">
        <p>
          <label for="brandInput">Nome da Marca: </label>
          <Input
            type="text"
            id="brandInput"
            name="brandInput"
            placeholder="ex: 'VOLKWAGEM'"
            w={"200px"}
            mb={"20px"}
          />
        </p>
        <p>
          <label for="modelInput">Modelo: </label>
          <Input
            type="text"
            id="modelInput"
            placeholder="ex. 'GOL'"
            name="modelInput"
            w={"200px"}
            mb={"20px"}
          />
        </p>
        <p>
          <label for="idInput">Placa </label>
          <Input
            type="text"
            id="idInput"
            name="idInput"
            w={"200px"}
            placeholder="ex : 'DAS-9987"
            mb={"20px"}
          />
        </p>

        <button type="submit">Fazer Login</button>
      </form>
    </section>
  );
}
