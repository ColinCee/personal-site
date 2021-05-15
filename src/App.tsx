import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";

const Container = styled.div`
  height: 100vh;
`;
function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
