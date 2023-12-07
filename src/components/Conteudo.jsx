import { StyledConteudo, StyledSection } from '../styles/styles.js';
import Artigo from './Artigo.jsx';
import cursos from '../../modules/cursos.js';
import { useState } from 'react';

function Conteudo() {
  /*
    Criando gerenciador de state para mudança/filtro de categorias.
    Inicialmente, começa como null pois ainda não temos uma escolha/seleção
    de categoria (aparece tudo)
   */
  const [categoria, setCategoria  ] = useState(null)
  const aplicarFiltro = (event) => {
    // Capturamos (após o clique) o texto escrito do botão
    const categoriaEscolhida = event.currentTarget.innerText;
    // E em seguida passamos este texto para o state de categoria
    setCategoria(categoriaEscolhida);
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
          <p>
            <b>Filtrar por: </b><button onClick={ aplicarFiltro }>Front-End</button>
            <b>Filtrar por: </b><button onClick={ aplicarFiltro }>Back-End</button>
            <b>Filtrar por: </b><button onClick={ aplicarFiltro }>Design</button>
          </p>
          {/*
            Rederização Condicional
            O texto/tag/componente somente será rederizado/exibindo
            se o state categoria existir (ou seja, não é null, undefined, false)
          */}
          { categoria && (<p>Mostrando cursos de: {categoria}</p>) }
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