import { StyledArtigo } from '../styles/styles.js';

// Definindo props para componentes nomeDaFuncao( -> props <- )
function Artigo(props) {
  return(
    <StyledArtigo>
      {/* eslint-disable-next-line react/prop-types */}
      <h3> { props.titulo } </h3>
      {/* eslint-disable-next-line react/prop-types */}
      <p> {props.descricao} </p>
    </StyledArtigo>
  )
}

export default Artigo;