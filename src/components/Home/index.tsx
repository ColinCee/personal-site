import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";

const StyledContent = styled(Content)`
  margin-left: 2em;
  height: 100%;
  max-width: 1440px;
  margin: 5em auto;
`;
const Home = () => {
  return (
    <StyledContent>
      <div className="site-layout-content">Content</div>
    </StyledContent>
  );
};

export default Home;
