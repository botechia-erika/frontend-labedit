import { ButtonLabeBookContainer } from "./ButtonLabeBook.styled";

export function ButtonLabeBook ({children, childClick}){
  return(
    <ButtonLabeBookContainer
    onClick={childClick}
    >
      {children}
    </ButtonLabeBookContainer>  
  )
}