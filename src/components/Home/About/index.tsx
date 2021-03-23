import React from "react";
import styled from "styled-components";
import Color from "../../styling/Color";
import BackgroundText from "./BackgroundText";
import Intro from "./Intro";
import Skillset from "./Skillset";

const Container = styled.div`
  padding: 2rem;
  background-color: ${Color.PRIMARY_100};
  && * {
    color: #d9d9d9;
  }
`;
export default () => {
  return (
    <Container>
      <Intro />
      <Skillset />
      <BackgroundText />
    </Container>
  );
};
