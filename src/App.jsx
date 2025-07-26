import React from 'react';  
import { useState } from 'react';
import './App.css';
import {ToastContainer, toast} from 'react-toastify';
function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('');

const handleSubmit= (e) => {
    e.preventDefault();
  
  const today = new Date();
  const selectedDate = new Date(data);

  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    alert('A data não pode ser no passado');

    return;
  }
  alert('Post criado com sucesso!');
  };

  return (
    <section className="container"> 
      <form action="" onSubmit={handleSubmit}>
        <h3>Novo Post</h3>
        <label htmlFor="titulo">Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="titulo" required />

        <label htmlFor="descricao">Descrição</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} id="descricao" required />

        <h3>URL da imagem de capa</h3>
        <label htmlFor="imagem">Imagem</label>
        <input
          value={imagem || ''}
          type="text"
          id="imagem"
          onChange={(e) => {
            const valor = e.target.value;
            if (valor.startsWith('http://') || valor.startsWith('https://')) {
              setImagem(valor);
              toast.success('URL aceita!');
            } else {
              setImagem('');
              toast.error('URL inválida!');
            }
          }}
        />

        <h3>Data de publicação</h3>
        <label htmlFor="data"></label>
        <input
          type="date"
          id="data"
          value={data}
          onChange={(e) => setData(e.target.value)} required
  
        />


        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} name="" id="categoria" required>
          <option value="">Selecione uma categoria</option>
          <option value="artigo">Artigo</option>
          <option value="noticia">Notícia</option>
          <option value="tutorial">Tutorial</option>
          <option value="entrevista">Entrevista</option>
          <option value="outro">Outro</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default App
