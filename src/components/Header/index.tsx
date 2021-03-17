import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  position: "fixed";
  z-index: 1;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
