import React from 'react';


const Post = ({ post,  }) => {
    return (
        <div>
            <h2>{post.titulo}</h2>
            <p>{post.descricao}</p>
            <img src={post.capa} alt={post.titulo} />
            <p>Categoria: {post.categoria}</p>
            <p>Data de publicação: {post.data}</p>
            <button onClick={() => (post.id)}>Excluir</button>
        </div>

    );
}

export default Post;
