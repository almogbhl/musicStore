import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/global.styles";
import MusicStore from './components/MusicStore/MusicStore';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />

      <MusicStore />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`;
