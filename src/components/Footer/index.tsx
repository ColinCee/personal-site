import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const StyledFooter = styled(Layout.Footer)`
  width: 100%;
`;
const Header = () => {
  return <StyledFooter>Ant Design ©2018 Created by Ant UED</StyledFooter>;
};

export default Header;
