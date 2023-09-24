import { useState } from "react";
import { Box, Input, Flex, Select } from "@chakra-ui/react";

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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZjcr6ptSjN0gYZ5MfT30t3MW4kw34Khi5Q&usqp=CAU",
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
            <Box>
              <h2>Dados do Usuario</h2>
              <Box p={'4'}>
                 <label htmlFor="inputCpfCnpj">
                  CPF ou CNPJ do cliente
                 </label>
                  <Input 
                  mt={'10px'}
                  pattern="/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/"
                  type="text"
                  name={"inputCpfCnpj"}
                  id="inputCpfCnpj"
                  value={form.inputCpfCnpj}
                  placeholder={"ex: 333.219.842-x"}
                  onChange={(e) => {
                    setForm({ ...form, inputCpfCnpj: e.target.value });
                  }}
                />
              </Box>
              <p>
                <Input
                  type="text"
                  name={"inputName"}
                  id="inputName"
                  value={form.inputName}
                  placeholder={"nome de cadastro"}
                  onChange={(e) => {
                    setForm({ ...form, inputName: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputNickname"}
                  id="inputNickname"
                  value={form.inputNickname}
                  placeholder={"pepito-luiz"}
                  onChange={(e) => {
                    setForm({ ...form, inputNickname: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputName"}
                  id="inputName"
                  value={form.inputEmail}
                  placeholder={"pepito@mail.com"}
                  onChange={(e) => {
                    setForm({ ...form, inputEmail: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputPassword"}
                  id="inputPassword"
                  value={form.inputPassword}
                  placeholder={"senha"}
                  onChange={(e) => {
                    setForm({ ...form, inputPassword: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"confirmPassword"}
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder={"confirmar senha"}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </p>
              <button
                onClick={() => {
                  setViewForm(2);
                }}
              >
                Proximo Passo
              </button>
            </Box>
          ) : viewForm === 2 ? (
            <Box>
              <h2>Dados do Carro</h2>
<p>{product.name}</p>
<p>Código do Produto: {product.id}</p>
<Input type="number" min={1} max={12} 
value={form.quantity} 
placeholder="Quantidade de Meses em NUMERO 'ex:' 9"
onChange={(e)=>setForm(...form,  quantity(e.target.value))}/>
<button onClick={() => {
                  setViewForm(1);
                }}
              >
                 Passo Anterior
              </button>
<button onClick={() => {
                  setViewForm(3);
                }}
              >
                Proximo Passo
              </button>
            </Box>
          ) : viewForm === 3 ? (
            <div>
              <h3>Dados de Pagamento</h3>
              <p>{calcFinalPrice(product, purchase)}</p>
              <p>
                <Input
                  type="text"
                  name={"inputName"}
                  id="inputName"
                  value={form.inputName}
                  placeholder={"nome de cadastro"}
                  onChange={(e) => {
                    setForm({ ...form, inputName: e.target.value });
                  }}
                />
              </p>
              <button onClick={() => {
                  setViewForm(2);
                }}
              >
                 Passo Anterior
              </button>
              <button
                onClick={() => {
                  setViewForm(4);
                }}
              >
                Proximo Passo
              </button>
            </div>
          ) : (
            <>
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
          </>
          )}
        </form>
      </Box>
    </Flex>
  );
}
