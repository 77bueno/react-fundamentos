import { useParams } from "react-router-dom";

function DetalhesProduto(){
    const { id } = useParams();

    return <article>
        <h2>Titulo...</h2>
        <p><b>Categoria: </b> Categoria...</p>
        <p>Descricao...</p>
        <img src="" alt="" />
    </article>
}

export default DetalhesProduto;