import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import styled from "styled-components";
import CurrentTime from "./CurrentTime";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  align-items: center;
  margin-top: 3em;
  font-size: 36px;
`;

export default () => {
  return (
    <Container>
      <GithubOutlined />
      <LinkedinOutlined />
      <CurrentTime />
    </Container>
  );
};
