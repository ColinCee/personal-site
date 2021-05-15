import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../../../styling/layout/HorizontalMargin";
import Backend from "./Backend";
import Devops from "./Devops";
import Frontend from "./Frontend";

const Container = styled(HorizontalMargin)`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  margin-top: 4em;
  h3 {
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
