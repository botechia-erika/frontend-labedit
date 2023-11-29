export function LikeClicked(){
    return 
    (<div>
    <button className="greebBtn">
    <i className="fa-solid fa-thumbs-up" ></i>
    {likes}
    </button>
    <button>
    <i class="fa-solid fa-thumbs-down"></i>
    {dislikes}
    </button>
    </div>)}