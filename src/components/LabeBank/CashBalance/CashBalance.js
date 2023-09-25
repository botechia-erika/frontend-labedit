import React , {useState} from 'react'
import { Input, Box } from '@chakra-ui/react'
export const CashBalance = () => {

const [finalPrice, setFinalPrice] = useState(0)
const [totalPaid, setTotalPaid] = useState(0)
const [newPayment, setNewPayment] = useState(0)
const calcRest = (a, b)=>{a-b}

  return (
    <Box p={'40px'} pt={'180px'} >
<h2>Movimentos de Conta</h2>
<div>
   <h3>{finalPrice}</h3>

    <p>Total Pago{totalPaid}</p>



    <hr/>

    <h3>Novo Pagamento </h3>
    <Input type="number" name={'newPayment'} id="newPayment" value={newPayment}/>

</div>



    </Box>
  )
}
