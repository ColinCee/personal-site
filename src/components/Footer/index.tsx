import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const StyledFooter = styled(Layout.Header)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  text-align: center;
`;
const Header = () => {
  return <StyledFooter>Ant Design ©2018 Created by Ant UED</StyledFooter>;
};

export default Header;
