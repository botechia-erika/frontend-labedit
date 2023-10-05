import { Box, Input, Button } from "@chakra-ui/react";
export function Step1 ({setForm, form, setViewForm, viewForm, confirmPassword}){
    return(
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
            title="formato CPF '' ou CNPJ  ''"
            name={"inputCpfCnpj"}
            id="inputCpfCnpj"
            value={form.inputCpfCnpj}
            placeholder={"'ex:' 333.219.842-x"}
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
        <Button
          onClick={() => {
            setViewForm(2);
          }}
        >
          Proximo Passo
        </Button>
      </Box>
    )
}