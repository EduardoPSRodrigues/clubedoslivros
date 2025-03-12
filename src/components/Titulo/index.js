import styled from "styled-components";

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${props => props.cor || "#000"}; 
  font-size: ${props => props.tamanhoFonte || "18px"};
  text-align: ${props => props.alinhamento || "center"}; ;
  margin: 0;
`;

// Criei uma props com o nome cor sendo que a cor padrão é o #eb9b00

export default Titulo;