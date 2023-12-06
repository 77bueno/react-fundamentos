/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../api/cursos.js";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  button {
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
  }

  .espacoCima {
    margin-top: 1rem;
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


function Conteudo() {

  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  const exemplo3 = (valor) => {
    alert(`Exemplo 3 ${valor}`);
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <button onClick={exemplo2}>Exemplo 2</button> 
      
      <br />

      <button className="espacoCima" onClick={exemplo3}>Exemplo 3</button>
      {/* Acionando o evento/função através do Conteúdo [pai] */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {
          cursos.map( curso => <Artigo
            /* É necessário criar uma prop para passar a chamada/referência
            da função do componente pai 
            handleClick={ () => { exemplo3(curso.categoria) } } */
            aoClicar={ () => {exemplo3(curso.categoria)} }
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

export default Conteudo;
