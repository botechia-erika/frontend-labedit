import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsCtn } from "./styledDetails";
import { LabeEcommerceRoutes } from "../routes/LabeEcommerceRoutes";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { URLAPI } from "../../../constants/URLAPI";
import { FormPurchase } from "../../../components/LabeEcommerce/FormPurchase/FormPurchase";
export function ProductDetails() {
  const [cartList, setCartList] = useState([]);
  const [click, setClick] = useState("");
  const [items, setItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [trueCheckbox, setTrueCheckbox] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [quantity, setQuantity] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const { idDetails } = useParams();

  console.log(idDetails);
  const [productItem, setProductItem] = useState({
    description: "",
    id: "",
    image_url: "",
    name: "",
    price: 0,
  });
  useEffect(() => {
    axios
      .get(`${URLAPI}/frota/${idDetails}`)
      .then((response) => {
        setProductItem(response.data.product[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(productItem);

  function addCart(item) {
    const searchAtCart = carrinho.find((cartItem) => {
      cartItem.id === item.id;
    });
    if (!searchAtCart) {
      console.log("novo item");
    } else {
      console.log("item existe");
    }
  }

  const orderPrice = () => {
    setItems([...items].sort((a, b) => (a.price > b.price ? -1 : 1)));
  };
  const orderPrice2 = () => {
    setItems([...items].sort((a, b) => (a.price > b.price ? 1 : -1)));
  };
  return (
    <DetailsCtn>
      <div>
        <Flex
          flexFlow={"row wrap"}
          justifyContent={"center"}
          alignSelf={"center"}
        >
          <Box w={"40%"} minW={"420px"} minH={"570px"}>
            <Heading m={"10px auto"} textAlign={"center"}>
              <h2>{productItem.name}</h2>
            </Heading>
            <Image src={productItem.image_url} alt={"img do produto"} />
          </Box>

          <Box w={"40%"} minW={"420px"} minH={"570px"}>
            <h3>
              {" "}
              Ficha Tecnica <br />
              <hr /> {productItem.name}
            </h3>
            <p>
              Mensalidade R$:{productItem.price.toFixed(2).replace(".", ",")}{" "}
            </p>
            <p>Categoria: {productItem.description}</p>

            <Box bg={"whitesmoke"} m={"40px auto"}>
              <h4>PEDIDO DE LOCAÇÃO</h4>
              <FormPurchase product={productItem} />
            </Box>
          </Box>
        </Flex>
      </div>
      <div></div>
    </DetailsCtn>
  );
}
