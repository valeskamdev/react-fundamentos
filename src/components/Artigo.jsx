import { StyledArtigo } from '../styles/styles.js';


// Definindo props para componentes nomeDaFuncao( -> props <- )
function Artigo({ titulo, categoria, preco }) {
  const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);

  return(
    <StyledArtigo>
      <h3>{ categoria }</h3>
      <p><b>Curso: </b>{ titulo }</p>
      <p><b>Preço: </b> { precoFormatado }</p>
    </StyledArtigo>
  )
}

export default Artigo;