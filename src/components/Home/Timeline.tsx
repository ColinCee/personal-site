import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";

const StyledContent = styled(Content)`
  margin-top: 2em;
  height: 90vh;
`;
export default () => {
  return (
    <StyledContent>
      <div className="site-layout-content">Content</div>
    </StyledContent>
  );
};
