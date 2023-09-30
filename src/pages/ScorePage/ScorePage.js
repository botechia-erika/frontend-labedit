import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { AdminCtn } from "./styledScore";
import { HeaderScore } from "./HeaderScore/HeaderScore";
import { useRequestData } from "../../hooks/useRequestData";
import { URLAPI } from "../../constants/URLAPI";
import { SearchScore } from "./SearchScore/SearchScore";

export function ScorePage() {
  const [formType, setFormType] = useState(1);
  const [titleType, setTitleType] = useState("Carro");
  const path = "users";

  const url = `http://lcalhost:3003/${path}`;
  const [users, isLoading, error] = useRequestData(url, []);

  console.log(users);
  return (
    <AdminCtn className="container">
      <div>
        {isLoading && <p>Carregando</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && users && users.length > 0 && (
          <section className="container  sombra">
            <HeaderScore />

            <SearchScore />
          </section>
        )}
        {!isLoading && users && users.length === 0 && <p>Lista vazia</p>}
      </div>
    </AdminCtn>
  );
}
