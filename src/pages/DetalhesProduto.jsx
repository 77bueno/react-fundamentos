import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imagemLoading from "../assets/loading.svg";


function DetalhesProduto(){
    /* Usamos o hook useParams do React Router DOM
    para ter acesso aos parâmetros da rota dinâmica
    neste caso, o parâmetro chamado "id". */
    const { id } = useParams();

    const [detalhesprodutos, setDetalhesProdutos] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
                const dados = await resposta.json();
                setDetalhesProdutos(dados);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar produto: "+error);
            }
        }
        carregarDados();
    }, [id] );

    return (
        <article>
            { loading ? (
                <p style={{textAlign : "center"}}>
                <img src={imagemLoading} alt="" />
             </p>
            ) : <div>
                    <h2> {detalhesprodutos.title} </h2>
                    <p><b>Categoria: </b> {detalhesprodutos.category}</p>
                    <p>{detalhesprodutos.description}</p>
                    <p><img style={{maxWidth: "10vw"}} src={detalhesprodutos.image} alt="" /></p>
                </div>
            }
        </article>
    );
}

export default DetalhesProduto;