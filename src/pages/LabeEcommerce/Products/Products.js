import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from './../../../commons/context/productsContext';
import { Input, Container, Heading, Flex } from '@chakra-ui/react';
import { CardList } from '../../../components/LabeEcommerce/CardList/CardList';
import { LoaderComponent } from './../../../components/LoaderComponent/LoaderComponent';
import { ErrorComponent } from './../../../components/ErrorComponent/ErrorComponent';
import {ContainerLabecommerce} from './styled.Products'
export function Products() {
  const {
    products,
    courses,
    isLoadingCourses,
    isErrorCourses,    searchName,
    setSearchName,
  } = useContext(ProductsContext);

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



  return (
    <ContainerLabecommerce>
      <Flex direction="column" align="center">
        <Heading mb={4}>LABE-CURSOS</Heading>
        <Input
          name="searchName"
          id="searchName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search by name"
          mb={4}
        />
      </Flex>

      <Flex justify="center">
        {isLoadingCourses ? (
          <LoaderComponent />
        ) : isErrorCourses ? (
          <ErrorComponent />
        ) : (
          <Flex wrap="wrap" justify="space-evenly">
            {products.map((item) => (
              <CardList
                item={item}
                key={item.id}
                addCart={() => addCart(item)}
              />
            ))}
          </Flex>
        )}
      </Flex>
    </ContainerLabecommerce>
  );
}

 