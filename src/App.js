import "./App.css";
import Logo from "./components/Logo";
import IconePerfil from "./image/perfil.svg"
import IconeSacola from "./image/sacola.svg"


const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];
const icones = [IconePerfil, IconeSacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <ul className="menu">
          {textoOpcoes.map((texto) => {
            return ( <li className="opçãomenu"> <p>{texto}</p> </li>);
          })}
        </ul>

        <ul className="icones">
          {icones.map((icone) => {
            return ( <li className="icone"> <img src={icone} alt="icone" /> </li>);
          })}

        </ul>
      </header>
    </div>
  );
}

export default App;
