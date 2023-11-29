import {CardItemContainer} from './styled.CardItem'
import bannerImg from './../../../assets/labeBooks/bannerImg.png'

export function  CardItem({project}) {
  const {projectName, imgUrl, repo, deploy, description } = project
  
  
    return (
  <CardItemContainer className='item'> 
      <div className='header'>
<h3>{projectName}</h3>
          <img src={imgUrl} alt='img do card'/>
 
       
      </div>
      <div >
        <div>
        <p>{description}</p>
        </div>
        <div className='footer'>
          <a href={""} target="_blank">
          <i className="fa-brands fa-github"></i>
          </a>
          <a href={""} target="_blank">
          <i className="fa-solid fa-globe"></i>
          </a>
          <button>
          <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button>
          <i class="fa-solid fa-thumbs-down"></i>
          </button>
          </div>
      </div>
  </CardItemContainer>)
}