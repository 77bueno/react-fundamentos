import { useEffect, useState } from "react";

function Produtos(){
     /* O state "produtos" é iniciado como um array vazio.
  Posteriormente (após o carregamento dos dados da API),
  ele será preenchido com os objetos/produtos. */
  const [produtos, setProdutos] = useState([]);

  // State de loading (por padrão, inicia ativado/true)
  const [loading, setLoading] = useState(true);

  /* Gerenciando o efeito colateral
  do componente para o carregamento dos dados da API. 
  
  Fluxo geral de funcionamento do código abaixo:

  1) useEffect é carregado UMA VEZ e APÓS a montagem da page (Produtos)
  Obs.: o [] indica que o useEffect não tem dependências adicionais
  e que será executado somente UMA VEZ.

  2) Em seguida, ele executa a função carregarDados
  3) Ao término dela, atualiza o state (produtos)  */
    useEffect( () => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products`);
                const dados = await resposta.json();
                console.log(dados);
                setProdutos(dados); // adicionamos ao state
                setLoading(false); // desativamos o loading
            } catch (error) {
                console.error("Houve um erro: "+error);
            }
        };
    
        carregarDados();
    }, [] ); 

    return (
        <article>
            <h2>Produtos</h2>

            { loading ? <p>Carregando...</p> : (
                produtos.map( produto => { 
                    return <section key={produto.id}> 
                        <h3> {produto.title} </h3>
                        <p>Preço: {produto.price} </p>
                        <p> {produto.description} </p>
                    </section>
                })
            ) }
        </article>
    );
}

export default Produtos;