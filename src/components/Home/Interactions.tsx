import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import CurrentTime from "./CurrentTime";

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3em;
  font-size: 38px;
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
