import "./App.css";
import Logo from "./components/Logo";
import OpcoesHeader from "./components/OpcoesHeader";
import OpcoesIcones from "./components/OpcoesIcones";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <OpcoesHeader />

        <OpcoesIcones/>

      </header>
    </div>
  );
}

export default App;
