import { BannerContainer } from "./styled.Banner";
import bannerImg from './../../../assets/labeBooks/bannerImg.svg'
import {ButtonLabeBook} from './../ButtonLabeBook/ButtonLabeBook'
export function Banner({handleProjects, handleCardsRegister}){
  return(
    <BannerContainer>
     <div className='bannerFlex'>
      <div className='bannerFlex__div'>
      <img src={bannerImg} alt={"img do banner labe-books"} />
      </div>
      <div  className='bannerFlex__div'>
      <h2>labeBooks</h2>
      <ButtonLabeBook childClick={handleProjects}> VER PROJETOS </ButtonLabeBook> 
      <ButtonLabeBook childClick={handleCardsRegister}> CADASTRAR CARD</ButtonLabeBook> 

      </div>
      </div>
    </BannerContainer>
  )
}