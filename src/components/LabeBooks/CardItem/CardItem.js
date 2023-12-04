import { useEffect } from 'react'
import {CardItemContainer} from './styled.CardItem'
import bannerImg from './../../../assets/labeBooks/bannerImg.png'
import   ButtonLikeDislike  from '../ButtonLikeDislike/ButtonLikeDislike'

export function  CardItem({project}) {
  const {id, projectName, imgUrl, repo, deploy, description, likes, dislikes } = project
  useEffect(() => {
    // lógica para atualização de likes e dislikes
    // esta função será chamada sempre que likes ou dislikes mudarem
    console.log("Likes:", likes);
    console.log("Dislikes:", dislikes);
  }, [likes, dislikes]);

    return (
  <CardItemContainer className='item' key={project.id}> 
      <div className='header'>
<h3>{projectName}</h3>
          <img src={imgUrl} alt='img do card'/>
 
       
      </div>
      <div >
        <div>
        <p>{description}</p>
        </div>
        <div className='footer'>
        <div className={"buttonsBox"}>

          <a href={repo} target="_blank">
          <i className="fa-brands fa-github"></i>
          </a>
          <a href={deploy} target="_blank">
          <i className="fa-solid fa-globe"></i>
          </a>
          <ButtonLikeDislike id={project.id} likes={likes} dislikes={dislikes}/>

</div></div>
      </div>
  </CardItemContainer>)
}