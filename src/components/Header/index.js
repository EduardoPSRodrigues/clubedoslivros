import "./style.css";
import Logo from "./Logo";
import OpcoesHeader from "./OpcoesHeader";
import OpcoesIcones from "./OpcoesIcones";

function Header() {
  return (
    <header className="App-header">
      <Logo />

      <OpcoesHeader />

      <OpcoesIcones />
    </header>
  );
}

export default Header;
