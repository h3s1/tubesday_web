import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import styled from "styled-components";

const AppContainer = styled.div``;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer className="app">
        <Router />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
