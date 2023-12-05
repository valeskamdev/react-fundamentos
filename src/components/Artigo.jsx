import { StyledArtigo } from '../styles/styles.js';


// Definindo props para componentes nomeDaFuncao( -> props <- )
function Artigo({ imagem, textoAlternativo, data, icone, titulo, descricao, children }) {
  return(
    <StyledArtigo>
      <figure className="centralizar">
        <img src={ imagem } alt={ textoAlternativo }/>
      </figure>
      <h3> <span> { icone } </span>  { titulo } </h3>
      <p> { descricao } - <time>Lançamento: { data } </time> </p>

      {/* Buscando o conteúdo do componente filho */}
      { children }
    </StyledArtigo>
  )
}

export default Artigo;