/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../api/cursos.js";
import { useState } from "react";

function Conteudo() {
  /* Criando um gerenciador de state para mudança/filtro
    de categorias. Inicialmente, como começa como null pois ainda não
    temos uma escolha/seleção de categoria (aparece tudo). */
  const [categoria, setCategoria] = useState(null)

  const aplicarFiltro = (event) => {
    // Capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    // E em seguida passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
  };

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter( (curso) => {
    /* Se o state categoria for igual a uma 
    das categorias dos cursos, então será retornada
    a lista de cursos daquela categoria. Senão, será 
    retornada lista completa devido ao state ser null (ou seja,
    não há uma categoria para filtrar) */
    return curso.categoria === categoria  || categoria === null;
  });

  const retirarFiltro = () => setCategoria(null);

  /* Guardando a quantidade de cursos filtrados */
  const quantidade = cursosFiltrados.length;

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <br />

      <div className="filtros">
        <p><b>Filtrar por: </b> <br /> 
         <button onClick={aplicarFiltro}>Front-End</button> 
         <button onClick={aplicarFiltro}>Back-End</button> 
         <button onClick={aplicarFiltro}>Mobile</button>
         <button onClick={aplicarFiltro}>Full-Stack</button>
         
         { categoria && ( <button onClick={retirarFiltro}>Limpar Filtro 🧹</button> )}
         </p>
         <p>Quantidade de cursos: <b>{quantidade}</b></p>

         {/* Renderização Condicional
         o texto/tag/componente somente será renderizado/exibido 
         se o state categoria existir (ou seja, não é null, undefined, false) */}
         { categoria && <p> Você escolheu: <b>{categoria}</b> </p> }

         {/* Se quantidade for zero (ou seja, não tem cursos da categoria filtrada), 
         então mostre a mensagem */}
         { quantidade === 0 && (
          <p style={{color: "red", textAlign: "center"}}>
             Não há cursos desta categoria!
          </p>
         )}
      </div>

      <br />

      <div className="artigos">
        {
          cursosFiltrados.map( curso => <Artigo
            key={curso.id}
            categoria={curso.categoria}
            titulo={curso.titulo}
            preco={curso.preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
          })} 
          /> )
        }
        
      </div>
    </StyledConteudo>
  );
}

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  .filtros {
    margin: auto;
    text-align: center;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  button {
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    margin: 0.5rem 0.5rem;
  }

  h2,
  p {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      margin: auto;
      flex-wrap: wrap;
      width: 80%; 
      justify-content: space-between;

      & article {
        width: 48%;
      }
    }
  }
`;

export default Conteudo;
