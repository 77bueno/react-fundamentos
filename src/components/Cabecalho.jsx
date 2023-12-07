/* Cabecalho.jsx */
import { useState } from "react";
import Menu from "./Menu";

function Cabecalho() {
   /* Usando gerenciamento de states
  Aqui definimos a chamada de uma função especial do 
  React: 'useState'. Esta e outras funções iniciadas com o prefixo
  'use' são conhecidas como React Hooks. 
  
  No caso do useState, usando desestruturação, criamos
  uma variável que representa o valor do state (titulo)
  e uma função responsável por atualizar o state (setTitulo)  */
  const [titulo, setTitulo] = useState("fala pessoal");

  const mudarTitulo = () => {
      setTitulo("Olá Mundo! 🍇");
  };

  return (
    <StyledCabecalho>
      <h1>{titulo}</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

/* Importação da lib Styled Components */
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding-top: 1.2rem;

  hr {
    width: 50%;
    background-color: #9595c3;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;
export default Cabecalho;
