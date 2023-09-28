import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { AdminCtn } from "./styledPayments";
import { HeaderPayment } from "./HeaderPayment/HeaderPayment";
import { useRequestData } from "../../hooks/useRequestData";
import { URLAPI } from "../../constants/URLAPI";
import { NewPayment } from "./NewPayment/NewPayment";
export function OrangePayments() {
  const [formType, setFormType] = useState(1);
  const [titleType, setTitleType] = useState("Carro");
  const path = "frota";
  const changeContent = (formType, titleType) => {
    if (formType === 1) {
      setTitleType("CARROS");
    }
  };
  const url = `${URLAPI}/${path}`;
  const [products, isLoading, error] = useRequestData(url, []);

  return (
    <AdminCtn className="container">
      <HeaderPayment />
      <NewPayment />
      <footer>
        <p>footer</p>
      </footer>
    </AdminCtn>
  );
}
