import Menu from './Menu.jsx';
import estilos from './Cabecalho.module.css';

function Cabecalho() {
  return(
    <header>
      <h1>Olá <span className={estilos.sombra}>React</span>😃</h1>
      <hr/>
      <Menu />
    </header>
  )
}


export default Cabecalho;