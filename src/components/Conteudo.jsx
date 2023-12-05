import { StyledConteudo } from '../styles/styles.js';
import Artigo from './Artigo.jsx';
import cursos from '../../modules/cursos.js';

function Conteudo() {
  const dataLancamento = ["02/07/2005", "21/02/2011", "30/11/2014"];
  return(
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          cumque, cupiditate
          explicabo facilis id laboriosam molestias mollitia pariatur quasi
          saepe sed voluptatum.
          Commodi cumque eaque earum facere itaque nihil porro?</p>

        <section>
          {cursos.map(({ titulo, categoria, preco }) => (
            <Artigo titulo={titulo} categoria={categoria} preco={preco} ></Artigo>
          ))}
        </section>

      </section>
    </StyledConteudo>
  )
}

export default Conteudo;