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

function Artigo({imagem, icone, titulo, descricao, data, children}) {
  return (
    <StyledArtigo>
      <h3> 
        <span> {icone} </span>
        {titulo} 
      </h3>
      <p> {descricao} </p>
      <time> {data} </time>
      <br />
      <img src={imagem} alt="" />

      {children}
    </StyledArtigo>
  );
}

export default Artigo;
