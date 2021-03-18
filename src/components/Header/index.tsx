import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { FormOutlined, HomeOutlined } from "@ant-design/icons";
import HorizontalMargin from "../Layout/HorizontalMargin";

const StyledHeader = styled(Layout.Header)`
  position: "fixed";
  z-index: 1;
  width: 100%;
  color: #b7e3fa;
`;

const MenuItem = styled(Menu.Item)`
  && {
    color: #b7e3fa;
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HorizontalMargin>
        <Menu theme="dark" mode="horizontal">
          <MenuItem
            key="1"
            icon={<HomeOutlined style={{ fontSize: "16px" }} />}
          >
            Home
          </MenuItem>
          <MenuItem
            key="2"
            icon={<FormOutlined style={{ fontSize: "16px" }} />}
          >
            Blog
          </MenuItem>
        </Menu>
      </HorizontalMargin>
    </StyledHeader>
  );
};

export default Header;
