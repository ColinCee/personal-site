import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Statistic from "./Statistic";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 36px;
`;

export default () => {
  return (
    <>
      <Container>
        <GithubOutlined />
        <LinkedinOutlined />
      </Container>
      <Statistic />
    </>
  );
};
