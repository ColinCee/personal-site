import React from "react";
import styled from "styled-components";
import { ReactComponent as Java } from "devicon/icons/java/java-original.svg";
import { ReactComponent as Python } from "devicon/icons/python/python-original.svg";
import { ReactComponent as NodeJS } from "devicon/icons/nodejs/nodejs-original.svg";
import { ReactComponent as Redis } from "devicon/icons/redis/redis-original.svg";
import { ReactComponent as MongoDB } from "devicon/icons/mongodb/mongodb-original.svg";
import { ReactComponent as Postgres } from "devicon/icons/postgresql/postgresql-original.svg";
import Title from "antd/lib/typography/Title";
import Logo from "./Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(5 * 4em);
`;
const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4em);
  gap: 2em;
  margin-top: 1em;
  * {
    width: 4em;
    height: 4em;
  }
`;
export default () => {
  return (
    <Container>
      <Title level={2}>Backend</Title>
      <IconContainer>
        <Logo icon={<Java />} tooltipText="Java" />
        <Logo icon={<Python />} tooltipText="Python" />
        <Logo icon={<NodeJS />} tooltipText="NodeJS" />
        <Logo icon={<Redis />} tooltipText="Redis" />
        <Logo icon={<MongoDB />} tooltipText="MongoDB" />
        <Logo icon={<Postgres />} tooltipText="Postgres" />
      </IconContainer>
    </Container>
  );
};
