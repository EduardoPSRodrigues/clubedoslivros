import "./style.css";
import IconePerfil from "../../image/perfil.svg"
import IconeSacola from "../../image/sacola.svg"

const icones = [IconePerfil, IconeSacola]

function OpcoesIcones() {
  return (
    <ul className="icones">
          {icones.map((icone) => {
            return ( <li className="icone"> <img src={icone} alt="icone" /> </li>);
          })}

        </ul>
  );
}

export default OpcoesIcones;
