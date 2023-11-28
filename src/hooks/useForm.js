import {useState} from 'react'

export default function useForm(initalForm={}) {
  const [formState, setFormState] = useState(initalForm)
    const handleInputChange = ({target})=>{
      const {name, value} = target;
      setFormState({
        ...formState,
        [name]: value})
     }
return(
    {formState, handleInputChange}
  )
}
