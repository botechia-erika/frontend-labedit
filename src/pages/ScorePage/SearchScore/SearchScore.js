import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
export function SearchScore() {
  const [accountInput, setAccountInput] = useState("");

  const getProducts = () => {
    fetch("http://localhost:3003/frota")
      .then((response) => response.json())
      .then((data) => setItems(data.result))
      .catch((error) => console.error(error));
  };
  const { idDetails } = useParams();

  useEffect(() => {
    getProducts();
  }, []);

  const [emailInput, setEmailInput] = useState("");
  return (
    <form action="" method="post" className="formulario">
      <p>
        <label htmlFor="brandInput">Numero do CardCLUB: </label>
        <Input
          type="text"
          id="accountInput"
          name="accountInput"
          placeholder="ex: 'a095'"
          w={"200px"}
          mb={"20px"}
          value={accountInput}
        />
      </p>
      <p>
        <label htmlFor="emailInput">Senha do CLIENTE: </label>
        <Input
          type="text"
          id="emailInput"
          placeholder="ex. 'pepito@email.com'"
          name="emailInput"
          w={"200px"}
          mb={"20px"}
          value={emailInput}
        />
      </p>
      <p>
        <label htmlFor="emailInput">CADASTRAR TICKET:</label>
        <Input
          type="text"
          id="emailInput"
          placeholder="ex. 'pepito@email.com'"
          name="emailInput"
          w={"200px"}
          mb={"20px"}
          value={emailInput}
        />
      </p>
      <button type="submit">Fazer Login</button>
    </form>
  );
}
