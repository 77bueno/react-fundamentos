/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

/* Importando os assets de imagem */
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
      justify-content: space-between;

      & article {
        width: 32%;
      }
    }
  }
`;

const dataLivros = [
  "27-10-1991",
  "14-05-1875",
  "07-07-1932"
];


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
        <Artigo
          icone="🧙‍♂️"
          titulo="Harry Potter"
          descricao="Livro criado por J.K Rolling"
          data={dataLivros[0]}
          imagem={imagem1}
        >
          <h4>Volumes</h4>
          <ul>
            <li>A Pedra Filosofal</li>
            <li>A Câmara Secreta</li>
            <li>O Prisioneiro de Azkaban</li>
          </ul>
        </Artigo>

        <Artigo
          icone="💻"
          titulo="PHP - Com POO" 
          descricao="Livro de programação" 
          data={dataLivros[1]}
          imagem={imagem2}
        >
          <h4>Conteúdos principais</h4>
          <ol>
            <li>Programação Orientada a Objetos</li>
            <li>Fundamentos PHP</li>
            <li>Exercícios de Programação</li>
          </ol>
        </Artigo>

        <Artigo
          icone="🐱‍👤" 
          titulo="HTML5 e CSS3" 
          descricao="Linguagens de inicio, para o Front-End" 
          data={dataLivros[2]}
          imagem={imagem3}
        >
          <section>
            <h4>Assuntos do Filme: </h4>
            <details>
              <summary>Estrutura</summary>
              <p>HTML5 para estruturar e etc...</p>
            </details>

            <details>
            <summary>Estilização</summary>
              <p>CSS3 para estilizar e estilizar...</p>
            </details>

          </section>
        </Artigo>
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
