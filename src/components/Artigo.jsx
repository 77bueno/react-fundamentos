import { useState } from "react";
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

function Artigo({categoria, titulo, preco}) { 
  const [corP, setCor] = useState("lavender");

  const mudarCor = () => {
    corP == "lavender" ? setCor("#ca5aca") :  setCor("lavender"); 
  };

  return (
    <StyledArtigo onClick={mudarCor} style={{backgroundColor: corP}}>
      <h3> {categoria}  </h3>
      <p> {titulo} </p>
      <p> {preco} </p>
    </StyledArtigo>
  );
}

export default Artigo;
