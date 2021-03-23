import React from "react";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";

import Title from "antd/lib/typography/Title";
import FlexContainer, { FlexCol } from "../../styling/layout/FlexContainer";
import TimelineBar from "./TimelineBar";
import Color from "../../styling/Color";

type Props = {
  label: string;
  company: string;
  title: string;
  description: string;
};

const Container = styled.div`
  max-width: 60rem;
  display: grid;
  grid-template-columns: 12rem auto minmax(30rem, 1fr);
`;

const Label = styled(Title)`
  margin-block: 2rem;
  text-align: right;
  && {
    font-weight: 300;
  }
`;

const Description = styled(FlexCol)`
  margin-block: 2rem;
`;

const StyledCompany = styled(Title)`
  && {
    font-weight: 300;
  }
`;
const StyledTitle = styled(Title)`
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
      <Label level={4}>{label}</Label>
      <TimelineBar />
      <Description>
        <FlexContainer>
          <StyledCompany level={3}>{company} /</StyledCompany>
          <StyledTitle level={3}>{title}</StyledTitle>
        </FlexContainer>
        <Text>{description}</Text>
      </Description>
    </Container>
  );
};
