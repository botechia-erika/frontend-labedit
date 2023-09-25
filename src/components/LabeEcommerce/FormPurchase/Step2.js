import {Box, Input, Button } from '@chakra-ui/react'
export function Step2({ setForm, form, setViewForm, viewForm, product }){
    return(
    <Box>
    <h2>Dados do Carro</h2>
<p>{product.name}</p>
<p>Código do Produto: {product.id}</p>
<Input type="number" min={1} max={12} 
value={form.quantity} 
placeholder="Quantidade de Meses em NUMERO 'ex:' 9"
onChange={(e)=>setForm(...form,  quantity(e.target.value))}/>
<Button onClick={() => {
        setViewForm(1);
      }}
    >
       Passo Anterior
    </Button>
<Button onClick={() => {
        setViewForm(3);
      }}
    >
      Proximo Passo
    </Button>
  </Box>)
}