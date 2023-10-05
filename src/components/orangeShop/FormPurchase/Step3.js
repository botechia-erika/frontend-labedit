import {Button, Box, Input} from '@chakra-ui/react'
export function Step3({form,setForm, product, purchase, setViewForm, viewForm, calcFinalPrice}){
    return(
        <Box>
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
        <Button onClick={() => {
            setViewForm(2);
          }}
        >
           Passo Anterior
        </Button>
        <Button
          onClick={() => {
            setViewForm(4);
          }}
        >
          Proximo Passo
        </Button>
      </Box>
    )
}