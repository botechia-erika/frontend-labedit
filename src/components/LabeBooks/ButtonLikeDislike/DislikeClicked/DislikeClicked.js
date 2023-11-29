export function DislikeClicked(){
    return 
    (<div>
    <button>
    <i className="fa-solid fa-thumbs-up"></i>
    {likes}
    </button>
    <button className="redBtn">
    <i class="fa-solid fa-thumbs-down"></i>
    {dislikes}
    </button>
</div>)}