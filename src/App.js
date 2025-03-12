import Header from "./components/Header";
import Pesquisar from "./components/Pesquisar";
import UltimosLancamentos from "./components/UltimosLancamentos";
import styled from "styled-components";

// Crio um container para o elemento que desejo estilizar que nesse caso é a div
// OBS: Não utiliza mais a classe para fazer referencia ao elemento
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer> 

        <Header />

        <Pesquisar />

        <UltimosLancamentos />

    </AppContainer>
  );
}

export default App;
