import logo from "../../../image/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="logo-img" alt="logo" />
      <p>
        <strong> Clube</strong> dos Livros
      </p>
    </div>
  );
}

export default Logo;
