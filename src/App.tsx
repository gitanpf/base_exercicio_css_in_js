import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal from './styles'
import Container from './container'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
      <Rodape />
    </>
  )
}

export default App
