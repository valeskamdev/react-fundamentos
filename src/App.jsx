import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cabecalho from './components/Cabecalho.jsx';
import Rodape from './components/Rodape.jsx';
import Home from './pages/Home.jsx';
import Produtos from './pages/Produtos.jsx';
import Contato from './pages/Contato.jsx';
import Container from './components/Container.jsx';

function App() {
  return <>
    <BrowserRouter>
      <Cabecalho/>
      <Container>
        <Routes>
         <Route Component={ Home } exact path="/" />
         <Route Component={ Produtos } exact path="/produtos" />
         <Route Component={ Contato } exact path="/contato" />
        </Routes>
      </Container>
      <Rodape/>
    </BrowserRouter>
  </>;
}

export default App;