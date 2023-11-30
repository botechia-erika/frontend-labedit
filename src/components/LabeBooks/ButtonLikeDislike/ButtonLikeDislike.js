import { useEffect, useState } from "react";
import axios from "axios";

const ButtonLikeDislike = ({ id, likes, dislikes }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [error, setError] = useState(null);
  const [localLikes, setLocalLikes] = useState(likes);
  const [localDislikes, setLocalDislikes] = useState(dislikes);

  useEffect(() => {
    const userChoice = localStorage.getItem("userChoice");
    if (userChoice === "like") {
      setLiked(true);
    } else if (userChoice === "dislike") {
      setDisliked(true);
    }
  }, []);

  const handleLike = () => {
    if (!liked) {
      axios
        .put(`http://localhost:3003/projects/${id}`, { inputLike: 1 })
        .then(() => {
          setLiked(true);
          setDisliked(false);
          setLocalLikes(localLikes + 1);
          localStorage.setItem("userChoice", "like");
        })
        .catch((error) => {
          console.error("Erro ao atualizar o like:", error);
          setError("Erro ao atualizar o like");
        });
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      axios
        .put(`http://localhost:3003/projects/${id}`, { inputDislike: 1 })
        .then(() => {
          setLiked(false);
          setDisliked(true);
          setLocalDislikes(localDislikes + 1);
          localStorage.setItem("userChoice", "dislike");
        })
        .catch((error) => {
          console.error("Erro ao atualizar o dislike:", error);
          setError("Erro ao atualizar o dislike");
        });
    }
  };

  return (
    <div>
      <button onClick={handleLike} disabled={liked}>
        {localLikes} Likes
      </button>
      <button onClick={handleDislike} disabled={disliked}>
        {localDislikes} Dislike
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ButtonLikeDislike;
