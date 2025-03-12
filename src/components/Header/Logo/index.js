import logo from "../../../image/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImagem = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>

      <LogoImagem src={logo} alt="logo" />

      <p>
        <strong> Clube</strong> dos Livros
      </p>

    </LogoContainer>
  );
}

export default Logo;
