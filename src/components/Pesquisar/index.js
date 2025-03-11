import styled from "styled-components";
import Input from "../Input";
import { useState } from "react"; //Responsável por salvar as informações do estado
import { livros } from './dadosPesquisa'

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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisar() {
  
  const [livrosPesquisados, setLivrosPesquisados] = useState([]) //Variável que armazena o texto digitado
  
    return (
    <PesquisarContainer>

      <Titulo> Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontro seu livro no site.</Subtitulo>

      <Input 
        placeholder="Escreva o nome do livro" 
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
          setLivrosPesquisados(resultadoPesquisa)
        }} //É um evento que acontece e passa para a função
      />

      {livrosPesquisados.map( livro => (
         <Resultado>
          <p> {livro.nome} </p>
          <img src={livro.src} alt={livro.nome} />
        </Resultado>
        
      ))}

    </PesquisarContainer>
  );
}

export default Pesquisar;
