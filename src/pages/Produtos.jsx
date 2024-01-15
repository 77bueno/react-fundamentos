import { useState } from "react";

function Produtos(){
    /* O state "produtos" é iniciado como um array vazio.
    Posteriormente (após o carregamento dos dados da API),
    ele será preenchido com os objetos/produtos. */
    const [produtos, SetProdutos] = useState([]);

    const carregarDados = async () => {
        try {
            const resposta = await fetch(`https://fakestoreapi.com/products`);
            const dados = await resposta.json();
            console.log(dados);
            SetProdutos(dados);
        } catch (error) {
            console.error("Houve um erro: "+error);
        }
    }

    carregarDados();

    return <h2>Produtos</h2>
}

export default Produtos;