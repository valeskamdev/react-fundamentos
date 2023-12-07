import { StyledConteudo, StyledSection } from '../styles/styles.js';
import Artigo from './Artigo.jsx';
import cursos from '../../modules/cursos.js';

function Conteudo() {
  const aplicarFiltro = (event) => {
    console.log(event.currentTarget.innerText);
  }
  return(
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          cumque, cupiditate
          explicabo facilis id laboriosam molestias mollitia pariatur quasi
          saepe sed voluptatum.
          Commodi cumque eaque earum facere itaque nihil porro?</p>

        <div className="filtros">
          <p><b>Filtrar por: </b><button onClick={ aplicarFiltro }>Front-End</button></p>
          <p><b>Filtrar por: </b><button onClick={ aplicarFiltro }>Back-End</button></p>
          <p><b>Filtrar por: </b><button onClick={ aplicarFiltro }>Design</button></p>
        </div>

        <StyledSection>
          { cursos.map(({ titulo, categoria, preco, id }) => (
            <Artigo titulo={titulo} categoria={categoria} preco={preco} key={id} />
          ))}
        </StyledSection>

      </section>
    </StyledConteudo>
  )
}

export default Conteudo;