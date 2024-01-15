import { useEffect, useState } from "react";

function Produtos(){
    /* O state "produtos" é iniciado como um array vazio.
    Posteriormente (após o carregamento dos dados da API),
    ele será preenchido com os objetos/produtos. */
    const [produtos, SetProdutos] = useState([]);

    /* Gerenciamento o efeito colateral 
    do componente para o carregamento dos dados da API. */
    useEffect( () => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products`);
                const dados = await resposta.json();
                console.log(dados);
                SetProdutos(dados);
            } catch (error) {
                console.error("Houve um erro: "+error);
            }
        };
    
        carregarDados();
    }, [] ); 

    return (
        <article>
            <h2>Produtos</h2>

            {produtos.map( produto => { 
                return <section key={produto.id}> 
                    <h3> {produto.title} </h3>
                    <p>Preço: {produto.price} </p>
                    <p> {produto.description} </p>
                </section>
            })}
        </article>
    );
}

export default Produtos;