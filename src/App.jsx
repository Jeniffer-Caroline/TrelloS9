import React from 'react';  
import { useState } from 'react';
import './App.css';
function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);


  return (
    <section className="container"> 
      <form action="">
        <h3>Novo Post</h3>
        <label htmlFor="titulo">Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="titulo" />

        <label htmlFor="descricao">Descrição</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} id="descricao" />

        <h3>URL da imagem de capa</h3>
        <label htmlFor="imagem">Imagem</label>
        <input
          value={imagem || ''}
          type="text"
          id="imagem"
          onChange={(e) => setImagem(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default App
