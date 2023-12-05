import { StyledArtigo } from '../styles/styles.js';

// Definindo props para componentes nomeDaFuncao( -> props <- )
function Artigo(props) {
  return(
    <StyledArtigo>
      <figure className="centralizar">
        <img src={props.imagem} alt={ props.textoAlternativo }/>
      </figure>
      <h3> <span> {props.icone} </span>  { props.titulo } </h3>
      <p> {props.descricao} - <time>Lançamento: {props.data} </time> </p>

      {/* Buscando o conteúdo do componente filho */}
      { props.children }
    </StyledArtigo>
  )
}

export default Artigo;