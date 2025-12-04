import Container from './components/Container'
import Header from './components/Header'
import TypeSelector from './components/TypeSelector'

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <TypeSelector></TypeSelector>
      </Container>
    </>
  )
}

export default App
