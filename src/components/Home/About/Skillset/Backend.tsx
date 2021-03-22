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
import { Container, IconContainer } from "./Layout";

export default () => {
  return (
    <Container>
      <Title level={3}>Backend</Title>
      <IconContainer>
        <Logo Icon={Java} tooltipText="Java" />
        <Logo Icon={Python} tooltipText="Python" />
        <Logo Icon={NodeJS} tooltipText="NodeJS" />
        <Logo Icon={Redis} tooltipText="Redis" />
        <Logo Icon={MongoDB} tooltipText="MongoDB" />
        <Logo Icon={Postgres} tooltipText="Postgres" />
      </IconContainer>
    </Container>
  );
};
