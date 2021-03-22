import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import HorizontalMargin from "../styling/layout/HorizontalMargin";

const StyledFooter = styled(Layout.Footer)`
  width: 100%;
`;
const Header = () => {
  return (
    <StyledFooter>
      <HorizontalMargin>©2021 Created by Colin Cheung</HorizontalMargin>
    </StyledFooter>
  );
};

export default Header;
