import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: purple;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }
`;

function Artigo({ aoClicar, categoria, titulo, preco}) {
  return (
    <StyledArtigo>
      {/*  O componente filho (Artigo) recebe através
      da prop 'aoClicar' a refêrencia à
      função exemplo 3 existente no componente pai (Conteúdo) */}
      <h3 onClick={aoClicar}> {categoria}  </h3>
      <p> {titulo} </p>
      <p> {preco} </p>
    </StyledArtigo>
  );
}

export default Artigo;
