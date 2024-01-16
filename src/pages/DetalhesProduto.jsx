import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto(){
    /* Usamos o hook useParams do React Router DOM
    para ter acesso aos parâmetros da rota dinâmica
    neste caso, o parâmetro chamado "id". */
    const { id } = useParams();

    useEffect( () => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
                const dados = await resposta.json()
            } catch (error) {
                console.error("Erro ao carregar produto: "+error);
            }
        }
    }, [id] );

    return <article>
        <h2>Titulo...</h2>
        <p><b>Categoria: </b> Categoria...</p>
        <p>Descricao...</p>
        <img src="" alt="" />
    </article>
}

export default DetalhesProduto;