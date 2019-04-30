import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./global-styles";
import styled from "styled-components";

const AppContainer = styled.div``;

console.log(process.env);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppContainer className="app">
          <Router />
        </AppContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
