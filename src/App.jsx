import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import PostList from './PostList';
//import axios from 'axios';

function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      titulo: "Inteligência Artificial no Dia a Dia",
      descricao:
        "Como a IA está revolucionando serviços e impactando decisões em empresas e governos.",
      capa: "https://totalip.com.br/wp-content/uploads/2023/08/A-tecnologia-impulsiona-o-futuro-do-Brasil.png",
      data: "2025-07-15",
      tipo: "Artigo",
    },
    {
      id: 2,
      titulo: "5 Tendências Tech para 2026",
      descricao:
        "De computação quântica ao metaverso corporativo, conheça o que vem por aí.",
      capa: "https://totalip.com.br/wp-content/uploads/2023/08/A-tecnologia-impulsiona-o-futuro-do-Brasil.png",
      data: "2025-07-10",
      tipo: "Notícia",
    }
  ]);

  // Carrega posts do localStorage ao iniciar
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Salva posts no localStorage sempre que posts mudar
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(data);

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('A data não pode ser no passado');
      return;
    }

    const novoPost = {
      id: Date.now(),
      titulo,
      descricao,
      capa: imagemUrl,
      data,
      tipo: categoria.charAt(0).toUpperCase() + categoria.slice(1)
    };

    const novosPosts = [...posts, novoPost];
    setPosts(novosPosts);
    toast.success('Post criado com sucesso!');

    setTitulo('');
    setDescricao('');
    setImagemUrl('');
    setData('');
    setCategoria('');
  };

  // Função para deletar post
  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <ToastContainer />
      <section className="container">
        <form action="" onSubmit={handleSubmit}>
          <h3>Novo Post</h3>
          <label htmlFor="titulo">Título</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="titulo" required />

          <label htmlFor="descricao">Descrição</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} id="descricao" required />

         <h3>URL da imagem de capa</h3>
<label htmlFor="imagem-url">Imagem URL: </label>
<input
  type="text"
  id="imagem-url"
  value={imagemUrl}
  onChange={(e) => {
    const valor = e.target.value;
    if (valor.startsWith('http://') || valor.startsWith('https://')) {
      setImagemUrl(valor);
    } else {
      setImagemUrl('');
      toast.error('URL inválida! Somente HTTP ou HTTPS são permitidos.');
    }
  }}
  placeholder='Cole a URL da imagem de capa (somente HTTP ou HTTPS)'
  required
/>
          <h3>Data de publicação</h3>
          <label htmlFor="data"></label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)} required
          />

          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} id="categoria" required>
            <option value="">Selecione uma categoria</option>
            <option value="artigo">Artigo</option>
            <option value="noticia">Notícia</option>
            <option value="tutorial">Tutorial</option>
            <option value="entrevista">Entrevista</option>
            <option value="outro">Outro</option>
          </select>
          
          <button type="submit">Enviar</button>
        </form>
        <PostList posts={posts} handleDelete={handleDelete} />
      </section>
    </div>
  );
}

export default App;
