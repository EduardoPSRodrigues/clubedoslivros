import styled from "styled-components";
import Input from "../Input";

const PesquisarContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisar() {
  return (
    <PesquisarContainer>
      <Titulo> Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontro seu livro no site.</Subtitulo>
      <Input placeholder="Escreva o nome do livro" />
    </PesquisarContainer>
  );
}

export default Pesquisar;
