import {useNavigate} from 'react-router-dom'
import { PostsContainer } from './styled.Posts'
import {useRequestData} from './../../../hooks/useRequestData'
import {goToCourseDetails} from './../../../router/coordinator'
import {LoaderComponent} from './../../../components/LoaderComponent/LoaderComponent'
import {URLAPI} from './../../../constants/URLAPI'

import { FiThumbsUp, FiMessageCircle , FiThumbsDown} from "react-icons/fi";

export function Posts() {

  const [posts, isLoading, error] = useRequestData(`${URLAPI}posts`, [])

  console.log(posts)

  const navigate = useNavigate()
  const renderPosts = posts.map(post => {
    return <li className="postBox" key={post.id}>
      <div className="postBox-A">
        <p>Postado por:{post['creator_id']}</p>
      </div>
      <div className="postBox-B">
        <p>{post.content}</p>
      </div>
      <div className="postBox-C">
        <button onClick={()=>{goToCourseDetails(navigate, post.id)}}>Detalhes</button>
       <div className="postBox-stats">
      <button className="btn-like">
      <FiThumbsUp />
      </button>
      <button className="btn-dislike"><FiThumbsDown />
</button>

    <button className="btn-feedback">
    <FiMessageCircle />
    </button>
    </div>
      </div>
     </li>
  })
  return (
    <PostsContainer>
      <div></div>
      <section>
        <form>
        <input type="text" className="inputFeed"/>
        <button>Postar</button>
        </form>


        <ul>		{isLoading && <LoaderComponent/>} 
		{!isLoading && error && <p>Ocorreu um erro</p>}
		{!isLoading && posts && posts.length > 0 && <ul>{renderPosts}</ul>}
		{!isLoading && posts && posts.length === 0 && <p>Lista vazia</p>}

        </ul>


      </section>
      <div></div>     
    </PostsContainer>
  )
}
