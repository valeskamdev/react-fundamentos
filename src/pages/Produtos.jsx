function Produtos() {

  const carregarDados = async () => {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (e) {
      console.error('Houve um erro: ' + e);

    }
  }

  carregarDados();

  return <h2>Produtos</h2>
}

export default Produtos;