import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../../Layout/HorizontalMargin";
import Backend from "./Backend";
import Devops from "./Devops";
import Frontend from "./Frontend";

const Container = styled(HorizontalMargin)`
  display: flex;
  justify-content: space-between;
  margin-top: 4em;
  h2 {
    font-weight: 300;
  }
`;
export default () => {
  return (
    <Container>
      <Backend />
      <Frontend />
      <Devops />
    </Container>
  );
};
