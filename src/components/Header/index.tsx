import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  position: "fixed";
  z-index: 1;
  width: 100%;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
