import React from 'react';  
import { useState } from 'react';
function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');


  return (

    <section> 
       
          <form action="">
          <h3>Novo Post</h3>
          <label htmlFor="titulo">Título</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} id="titulo" />

          <label htmlFor="descricao">Descrição</label>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} id="descricao" />
        </form>
      </section>
  )
}

export default App
