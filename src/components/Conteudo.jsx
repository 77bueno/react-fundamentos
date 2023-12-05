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
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {
          cursos.map( curso => <Artigo
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
