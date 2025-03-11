import IconePerfil from "../../../image/perfil.svg";
import IconeSacola from "../../../image/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icones = [IconePerfil, IconeSacola];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
          <Icone>
            <img src={icone} alt="icone" />{" "}
          </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
