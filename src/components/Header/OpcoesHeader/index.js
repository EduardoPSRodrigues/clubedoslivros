import "./style.css";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

function OpcoesHeader() {
  return (
    <ul className="menu">
          {textoOpcoes.map((texto) => {
            return ( <li className="opçãomenu"> <p>{texto}</p> </li>);
          })}
        </ul>
  );
}

export default OpcoesHeader;
