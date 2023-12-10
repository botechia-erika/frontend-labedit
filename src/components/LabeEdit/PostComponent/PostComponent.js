import { PostComponentContainer } from "./styled.PostComponent";

export function PostComponent() {
    return (
    <PostComponentContainer className="postBox" key={post.id}>
      <div className="postBox-A">
        <p>Postado por:{post['creator_id']}</p>
      </div>
      <div className="postBox-B">
        <p>{post.content}</p>
      </div>
      <div className="postBox-C">
        
      </div>
   

    </PostComponentContainer>
    )
}