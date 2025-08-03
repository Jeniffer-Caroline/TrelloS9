import Post from "./Post"


const PostList = ({ posts }) => {
    return (
        <div className="container">
            <h1>Postagens</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h2>{post.titulo}</h2>
                        <p>{post.descricao}</p>
                        <img src="{post.urlImagem}" alt="{post.titulo}" />
                        <p>Categoria: {post.categoria}</p>
                        <p>Data de publicação:{post.data}</p>
                             </li>
                
                ))}

            </ul>
           
        </div>
    );
};

export default PostList