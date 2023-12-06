import { StyledArtigo } from '../styles/styles.js';


// Definindo props para componentes nomeDaFuncao( -> props <- )
function Artigo({ titulo, categoria, preco, aoClicar }) {
  const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);

  return(
    <StyledArtigo>
      {/*
        O componente filho (Artigo) recebe através da prop 'aoClicar'
        a referência á função exemplo 3 existente no componte pai (Conteudo)
      */}
      <h3 onClick={ aoClicar }>{ categoria }</h3>
      <p><b>Curso: </b>{ titulo }</p>
      <p><b>Preço: </b> { precoFormatado }</p>
    </StyledArtigo>
  )
}

export default Artigo;