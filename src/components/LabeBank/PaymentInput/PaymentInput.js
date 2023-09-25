import { Input } from "@chakra-ui/react"

export function PaymentInput(){
    const [newPayment, setNewPayment] = useState(0)
    
    return(

<>
<Input type="number" name={'newPayment'} id="newPayment" value={newPayment}/>



</>


    )
}