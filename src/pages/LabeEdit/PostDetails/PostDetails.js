import {useParams} from 'react-router-dom'
import {useRequestData} from './../../../hooks/useRequestData'
import {URLAPI} from './../../../constants/URLAPI'

export function PostDetails() {


  const { postId} = useParams()

  const [post, isPostLoading, isPostError] = useRequestData(`${URLAPI}posts/${postId}`, [])

  console.log(post)
  return (
    <div>
      <h1>PostDetails</h1>
    </div>
  )
}
