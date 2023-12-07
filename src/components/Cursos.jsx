import { StyledCursos, StyledSection } from '../styles/styles.js';
import Artigo from './Artigo.jsx';
import cursos from '../../modules/cursos.js';
import { useState } from 'react';

function Cursos() {
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

  const limparFiltro = (event) => setCategoria(null);
  const cursosFiltrados = cursos.filter(curso => curso.categoria === categoria || categoria === null);

  // Guardando a quantidade de cursos filtrados
  const quantidadeCursos = cursosFiltrados.length;

  return(
    <StyledCursos>
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
            <b>Filtrar por: </b><button onClick={ aplicarFiltro }>Programação</button>
            <b>Filtrar por: </b><button onClick={ aplicarFiltro }>Mobile</button>
            <b>Filtrar por: </b><button onClick={ aplicarFiltro }>Música</button>
            {/*{ categoria && <button onClick={ limparFiltro }>🧹 Limpar Filtro</button> }*/}
            { categoria && <button onClick={ () => setCategoria(null) }>🧹 Limpar Filtro</button> }
          </p>
          <p>Quantidade de cursos: <b>{ quantidadeCursos }</b></p>
          {/*
            Rederização Condicional
            O texto/tag/componente somente será rederizado/exibindo
            se o state categoria existir (ou seja, não é null, undefined, false)
          */}
          { categoria && (<p>Mostrando cursos de: {categoria}</p>) }
          {
            /*
              Se quantidade for zerro (ou seja, não tem cursos da
              categoria diltrada), então mostre a mensagem
            */
            quantidadeCursos === 0 &&
            <p style={{ color: 'red', textAlign: 'center' }}>Não há cursos desta categoria!</p>
          }
        </div>

        <StyledSection>
          { cursosFiltrados.map(({ titulo, categoria, preco, id }) => (
            <Artigo titulo={titulo} categoria={categoria} preco={preco} key={id} />
          ))}
        </StyledSection>

      </section>
    </StyledCursos>
  )
}

export default Cursos;