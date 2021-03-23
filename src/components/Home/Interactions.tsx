import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import Statistic from "./Statistic";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    width: 2.75rem;
    height: 2.75rem;
    border: none;
    background: none;
    box-shadow: none;
  }
`;
export default () => {
  return (
    <>
      <Container>
        <StyledButton
          href="https://github.com/ColinCee/"
          icon={<GithubOutlined style={{ fontSize: "2rem" }} />}
          size="large"
        />
        <StyledButton
          href="https://www.linkedin.com/in/colin-cheung/"
          icon={<LinkedinOutlined style={{ fontSize: "2rem" }} />}
          size="large"
        />
      </Container>
      <Statistic />
    </>
  );
};
