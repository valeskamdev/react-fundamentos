import { StyledConteudo, StyledSection } from '../styles/styles.js';
import Artigo from './Artigo.jsx';
import cursos from '../../modules/cursos.js';

function Conteudo() {
  const dataLancamento = ["02/07/2005", "21/02/2011", "30/11/2014"];

  /*
    Função que será chamada a partir do evento
    acionado por um componente/elemento.
   */
  const exemplo2 = () => {
    alert("Exemplo 2");
  }

  const exemplo3 = (value) => {
    alert("Exemplo 3 " + value);
  }

  return(
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <button onClick={exemplo2}>Exemplo 2</button>

        {/* Acionando o evento/função através do Conteudo pai*/}
        <button onClick={exemplo3}>Exemplo 3 (pai)</button>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          cumque, cupiditate
          explicabo facilis id laboriosam molestias mollitia pariatur quasi
          saepe sed voluptatum.
          Commodi cumque eaque earum facere itaque nihil porro?</p>

        <StyledSection>
          { cursos.map(({ titulo, categoria, preco, id }) => (
            <Artigo
              /*
                É necessário criar uma prop para passar a
                chamada/referência da função do componte pai
               */
              // handleClick={}
              aoClicar={ () => { exemplo3(categoria) } }
              titulo={titulo}
              categoria={categoria}
              preco={preco}
              key={id} />
          ))}
        </StyledSection>

      </section>
    </StyledConteudo>
  )
}

export default Conteudo;