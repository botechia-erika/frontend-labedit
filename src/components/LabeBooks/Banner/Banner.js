import { BannerContainer } from "./styled.Banner";
import bannerImg from './../../../assets/labeBooks/bannerImg.svg'

export function Banner(){
  return(
    <BannerContainer>
     <div className='bannerFlex'>
      <div className='bannerFlex__div'>
      <img src={bannerImg} alt={"img do banner labe-books"} />
      </div>
      <div  className='bannerFlex__div'>
      <h2>labeBooks</h2>
      </div>
      </div>
    </BannerContainer>
  )
}