import styled from 'styled-components';
import './App.css';
import React from 'react';

function App() {
  return (
    <AppContainer>
      <Heading1>Styled Components exercise</Heading1>
      <Circle></Circle>
      <Block></Block>
    </AppContainer>
  );
}

const AppContainer = styled.main`
  text-align: center;
`;

const Heading1 = styled.h1 `
  color: blue;
`;

const Circle = styled.div `
  background-color: orange;
  height: 50px;
  width: 50px; 
  border-radius: 50%;
  margin: 0 auto;
`

const Block = styled.div `
  background-color: blue;
  height: 50px;
  width: 50px;
  margin: 10px auto;
  transition: 0.5s;

  &:hover {
    background-color: turquoise;
  }
`


export default App;
