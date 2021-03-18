import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../Layout/HorizontalMargin";

const StyledContent = styled(Content)`
  margin-top: 2em;
  height: 90vh;
`;
const Home = () => {
  return (
    <HorizontalMargin>
      <StyledContent>
        <div className="site-layout-content">Content</div>
      </StyledContent>
    </HorizontalMargin>
  );
};

export default Home;
