import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

export const FlexRowCenter = styled(FlexContainer)`
  justify-content: center;
`;

export const FlexCol = styled(FlexContainer)`
  flex-direction: column;
`;
export const FlexColCenter = styled(FlexCol)`
  align-items: center;
`;

export default FlexContainer;
