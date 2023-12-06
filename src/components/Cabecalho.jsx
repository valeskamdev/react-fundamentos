import Menu from './Menu.jsx';
import { StyledCabecalho } from '../styles/styles.js';

function Cabecalho() {
  return(
    <StyledCabecalho>
      {/*
        Propriedade de evento que executará, após o clique, uma função intermediária
        que fará ações (chamar outras funções, executar outros processos etc).
      */}
      <h1 onClick={ () => alert("Exemplo 1") }>Olá React </h1>
      <hr/>
      <Menu />
    </StyledCabecalho>
  )
}


export default Cabecalho;