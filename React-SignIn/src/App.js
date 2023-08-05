import React from 'react';
import './App.css';
import styled from 'styled-components';
import { AccountBox } from './components/accountBox';
function App() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default App;

//Styled Components
const AppContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
