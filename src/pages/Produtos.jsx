import {useEffect, useState} from "react";

function Produtos() {

  const [produtos, setProdutos] = useState([]);

  /*
    Fluxo geral de funcionamento do código abaixo:


    1) useEffect é carregado UMA VEZ e APÓS a montagem do page (Produtos)
    Obs.: o [] indica que o useEffect não tem dependência adicionais e que será executados somente UMA VEZ.

    2) Em seguida, ele executa a função 'carregarDados'
    3) Ao término dela, atualiza o state (produtos)
   */

    // Gerenciando o efeito colateral,do componente para o carregamento dos dados da API.

  useEffect(() => {
    const carregarDados = async () => {

      /*
        O state "produtos" é iniciado como um array vazio. Posteriormente
        (após o carregamento dos dados da API), ele será preechido com os objetos/produtos.
       */

      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);

        setProdutos(dados);
      } catch (e) {
        console.error('Houve um erro: ' + e);

      }
    }
    carregarDados();
  }, []);

  return (
      <article>
        <h2>Produtos</h2>
        {produtos.map(({id, title, description, image, price}) => {
          return (
              <section key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={image} alt={title} />
                <p>R$ {price}</p>
              </section>
          );
        })}
      </article>
  );
}

export default Produtos;