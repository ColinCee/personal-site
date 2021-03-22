import React from "react";
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "devicon/icons/react/react-original.svg";
import { ReactComponent as Redux } from "devicon/icons/redux/redux-original.svg";
import { ReactComponent as Electron } from "devicon/icons/electron/electron-original.svg";
import { ReactComponent as Webpack } from "devicon/icons/webpack/webpack-original.svg";
import { ReactComponent as Javascript } from "devicon/icons/javascript/javascript-original.svg";
import { ReactComponent as Typescript } from "devicon/icons/typescript/typescript-original.svg";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import Logo from "./Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(4.5 * 4em);
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
      <Title level={2}>Frontend</Title>
      <IconContainer>
        <Logo icon={<ReactLogo />} tooltipText="React" />
        <Logo icon={<Redux />} tooltipText="Redux" />
        <Logo icon={<Electron />} tooltipText="Electron" />
        <Logo icon={<Webpack />} tooltipText="Webpack" />
        <Logo icon={<Javascript />} tooltipText="Javascript" />
        <Logo icon={<Typescript />} tooltipText="Typescript" />
      </IconContainer>
    </Container>
  );
};
