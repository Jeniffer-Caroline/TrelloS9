import { useEffect, useState } from "react";
import Post from "./Post";

const PostList = ({ posts, handleDelete }) => {
  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setLocalPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div className="post-container">
      {(localPosts.length > 0 ? localPosts : posts).map((post, index) => (
        <div className="post" key={post.id}>
          <h2>{post.titulo}</h2>
          <p>{post.descricao}</p>
          <img src={post.capa} alt={post.titulo} />
          <p>Tipo: {post.tipo}</p>
          <p>Data de publicação: {post.data}</p>
          <button onClick={() => handleDelete(post.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;