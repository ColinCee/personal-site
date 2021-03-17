import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  grid-template-columns: 1fr;
  height: 100vh;
`;
function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
