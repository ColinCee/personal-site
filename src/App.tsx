import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import ReactGA from "react-ga";
import Header from "./components/Header";
import Home from "./components/Home";

const Container = styled.div`
  height: 100vh;
`;
function App() {
  useEffect(() => {
    ReactGA.initialize("G-F246GL9SJW");
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
