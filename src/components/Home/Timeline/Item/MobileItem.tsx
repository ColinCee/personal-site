import React from "react";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";

import Title from "antd/lib/typography/Title";
import FlexContainer, { FlexCol } from "../../../styling/layout/FlexContainer";
import TimelineBar from "../TimelineBar";
import Color from "../../../styling/Color";

type Props = {
  label: string;
  company: string;
  title: string;
  description: string;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
`;

const Label = styled(Title)`
  && {
    font-weight: 300;
  }
`;

const Description = styled(FlexCol)`
  margin-left: 0.5rem;
  margin-block: 2rem;
`;

const StyledCompany = styled(Title)`
  && {
    font-weight: 300;
  }
`;
const StyledTitle = styled.span`
  &&& {
    color: ${Color.ACCENT_400};
    margin-top: 0;
    margin-left: 0.5rem;
    font-weight: 300;
  }
`;

export default ({ label, company, title, description }: Props) => {
  return (
    <Container>
      <TimelineBar />
      <Description>
        <StyledCompany level={3}>
          {company} /<StyledTitle>{title}</StyledTitle>
        </StyledCompany>
        <FlexContainer>
          <Label level={4}>{label}</Label>
        </FlexContainer>
        <Text>{description}</Text>
      </Description>
    </Container>
  );
};
