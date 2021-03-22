import React from "react";
import { ReactComponent as ReactLogo } from "devicon/icons/react/react-original.svg";
import { ReactComponent as Redux } from "devicon/icons/redux/redux-original.svg";
import { ReactComponent as Electron } from "devicon/icons/electron/electron-original.svg";
import { ReactComponent as Webpack } from "devicon/icons/webpack/webpack-original.svg";
import { ReactComponent as Javascript } from "devicon/icons/javascript/javascript-original.svg";
import { ReactComponent as Typescript } from "devicon/icons/typescript/typescript-original.svg";
import Title from "antd/lib/typography/Title";
import Logo from "./Logo";
import { Container, IconContainer } from "./Layout";

export default () => {
  return (
    <Container>
      <Title level={3}>Frontend</Title>
      <IconContainer>
        <Logo Icon={ReactLogo} tooltipText="React" />
        <Logo Icon={Redux} tooltipText="Redux" />
        <Logo Icon={Electron} tooltipText="Electron" />
        <Logo Icon={Webpack} tooltipText="Webpack" />
        <Logo Icon={Javascript} tooltipText="Javascript" />
        <Logo Icon={Typescript} tooltipText="Typescript" />
      </IconContainer>
    </Container>
  );
};
