
import {InputFieldContainer} from './styled.InputField';
export function InputField({
  labelText, inputValue, inputName, handleInputChange, inputPlaceholder
}){
  return (
    <InputFieldContainer>
     <label htmlFor={inputName}>{labelText}</label>
     <input name={inputName} id={inputName} value={inputValue}
    placeholder={inputPlaceholder} onChange={handleInputChange}   
     />
    </InputFieldContainer>
  )
}