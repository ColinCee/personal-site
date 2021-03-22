import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../styling/layout/HorizontalMargin";

const Container = styled(HorizontalMargin)`
  z-index: 2;
  position: relative;
  padding-top: 2em;
  height: 90vh;
  background-color: #fff;
`;
export default () => {
  return <Container />;
};
