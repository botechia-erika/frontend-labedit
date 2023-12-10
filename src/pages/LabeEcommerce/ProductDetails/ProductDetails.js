import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsCtn } from "./styledDetails";
import {useRequestData} from '../../../hooks/useRequestData'
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
export function ProductDetails({item}) {
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
  const { idCourse } = useParams();

  console.log(idCourse);
  const [productItem, setProductItem] = useState({
    description: "",
    id: "",
    image_url: "",
    name: "",
    price: 0,
  });



const [course, isLoadingCourse, isErrorCourse] = useRequestData(`${URLAPI}courses/${idCourse}`, [course])

const {id, name, imageUrl, description, price } = course




console.log(course)

/*  function addCart(item) {
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
  };*/
  return (
    <DetailsCtn>



            <Flex bg={"whitesmoke"} m={"40px auto"} w={'100%'} flexFlow={`row wrap`} >      
            <Box h={'80vh'} bg={'orange.200'}  w={'50%'} minW={'380px'} justifyContent={'space-around'}>
                <h2>{name}</h2>
                <Image src={imageUrl} alt={'imagem do curso'} w={'100%'} h={'300px'} m={' auto'} objectFit={'cover'}/>
                <ul>
                  <li>R${price}</li>
                  <li>{description}</li>
                 </ul> 
              </Box>
              <Box h={'80vh'} bg={'orange.200'}  w={'50%'} minW={'380px'}>
              <h4>PEDIDO DE LOCAÇÃO</h4>
              <FormPurchase product={productItem} />
              </Box>
            </Flex>
        
     
   
    </DetailsCtn>
  );
}
