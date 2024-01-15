import {useState} from "react";

function Produtos() {

  const carregarDados = async () => {

    /*
      O state "produtos" é iniciado como um array vazio. Posteriormente
      (após o carregamento dos dados da API), ele será preechido com os objetos/produtos.
     */

    const [produtos, setProdutos] = useState([]);
    
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

  return <h2>Produtos</h2>
}

export default Produtos;