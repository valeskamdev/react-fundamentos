import { StyledArtigo } from '../styles/styles.js';

// Definindo props para componentes nomeDaFuncao( -> props <- )
function Artigo(props) {
  return(
    <StyledArtigo>
      {/* eslint-disable-next-line react/prop-types */}
      <h3> <span> {props.icone} </span>  { props.titulo } </h3>
      {/* eslint-disable-next-line react/prop-types */}
      <p> {props.descricao} - <time>Lançamento: {props.data} </time> </p>
    </StyledArtigo>
  )
}

export default Artigo;