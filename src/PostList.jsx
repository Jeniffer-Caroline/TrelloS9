import { useEffect } from "react";
import Post from "./Post"


const PostList = ({ posts }) => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            setPost(JSON.parse(storedPosts));
        }
    }, []);
    
    return (
        <div className="post-container">
           
                {posts.map((post, index) => (
                    <Post
                 key={index}>
                    <div className="post">
                        <h2>{post.titulo}</h2>
                        <p>{post.descricao}</p>
                        <img src={post.capa} alt={post.titulo} />
                        <p>Categoria: {post.categoria}</p>
                        <p>Data de publicação: {post.data}</p>
                    </div>
                    </Post>
                ))}

         
           
        </div>
    );
};

export default PostList