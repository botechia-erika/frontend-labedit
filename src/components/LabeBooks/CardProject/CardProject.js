export function CardProject ({project}){
  
  const {id, name, description, score, repo, deploy, image_url, author, tags, stack} = project
  
  
  return(
      <CardProjectContainer>
      <span className='badgeFood'>{stack.toUpperCase()}</span>
      <h2>{name}</h2>
      <img src={image_url} alt={"img do produto " + name}/>
      <div className='d-flex p-4'>
             
      <button className='btn btn-success' >+ CARRINHO</button>
      </div>

    </CardProjectContainer>
     
    )
}