import Menu from './Menu.jsx';
import estilos from './Cabecalho.module.css';

function Cabecalho() {
  return(
    <header>
      <h1><span className={estilos['destaque-texto']}>Olá</span> <span className={estilos.sombra}>React</span>😃</h1>
      <hr/>
      <Menu />
    </header>
  )
}


export default Cabecalho;