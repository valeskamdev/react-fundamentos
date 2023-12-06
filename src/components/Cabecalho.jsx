import { useState } from 'react';
import Menu from './Menu.jsx';
import { StyledCabecalho } from '../styles/styles.js';

function Cabecalho() {
  /*
    Usando gerenciamento de states
    Aqui definimos a chamada de uma função iniciadas especial do Reacr: 'useState'.
    Esta e outras funções iniciadas com o prefixo 'use' são conhecidas com React Hooks.

    No caso do useState, usando desestruturação, criamos uma variável que representa
    o valor do state (titulo) e uma função responsável por atualizar o state (setTitulo)
   */
  const [titulo, setTitulo] = useState("Olá React! 🐞");

  /*
    Alterando o valor do state 'titulo' através do
    'setTitulo' quando ocorre o evento do click no h1
   */
  const mudarTitulo = () => {
    setTitulo("Acaba, pelo amor de diossss 😩")
  }

  return(
    <StyledCabecalho>
      <h1 onClick={ () => mudarTitulo() }>{titulo}</h1>
      <hr/>
      <Menu />
    </StyledCabecalho>
  )
}


export default Cabecalho;