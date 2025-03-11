import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;
const Opcao = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  font-size: 16px;
  min-width: 120px;
  cursor: pointer;
`;

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
          <Opcao>
            <p>{texto}</p>
          </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
