import { useState } from "react";
import { Box, Input, Flex, Select, Heading } from "@chakra-ui/react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
export function FormPurchase({product}) {

  const [purchase, setPurchase] = useState({
    id: undefined,
    buyer: undefined,
    quantity: 0,
    paid: 0,
    discount: 0.9
  });
  const calcFinalPrice = (product, purchase) => {
    const calc = product.price * purchase.quantity * purchase.quantity;
    return calc;
  };
  const [viewForm, setViewForm] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form, setForm] = useState({
    inputCpfCnpj: "",
    inputName: "",
    inputEmail: "",
    inputPassword: "",
    inputNickname: "",
    inputAvatar:
      "https://i.postimg.cc/0jnWNmXX/orangeavatar.png",
    inputRole: "Buyer",
    /* dados do produto */
    inputProductId:"",
    inputFinalPrice: calcFinalPrice(product, purchase),
    inputPaid: 0
});
  return (
    <Flex>
      <Box w={"80%"}>
        <form>
          {viewForm === 1 ? (
           <Step1
           form={form}
           setForm={setForm}
           viewForm={viewForm}
           setViewForm={setViewForm}
           confirmPassword={confirmPassword}
           />
          ) : viewForm === 2 ? (
<Step2
 setForm={setForm} 
 form={form}
 setViewForm={setViewForm}
 viewForm={viewForm}
 product={product}
/>
          ) : viewForm === 3 ? (
           <Step3
           form={form}
           setForm={setForm} 
           product={product}
           purchase={purchase} 
           setViewForm={setViewForm}
           viewForm={viewForm}
           calcFinalPrice={calcFinalPrice}
           />
          ) : (
            <Box>
               <Heading>
                <h2>Check-In do Produto</h2>
               </Heading>
            <button onClick={() => {
                  setViewForm(3);
                }}
              >
                 Passo Anterior
              </button>
            <button
              onClick={() => {
                setViewForm(3);
              }}
            >
              Proximo Passo
            </button>
          </Box>
          )}
        </form>
      </Box>
    </Flex>
  );
}
