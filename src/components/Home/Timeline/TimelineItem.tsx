import React from "react";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";

import Title from "antd/lib/typography/Title";
import { FlexCol, FlexRowCenter } from "../../styling/layout/FlexContainer";
import TimelineBar from "./TimelineBar";

type Props = {
  label: string;
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

const StyledTitle = styled(Title)`
  && {
    font-weight: 300;
  }
`;

export default ({ label, title, description }: Props) => {
  return (
    <Container>
      <Label level={4}>{label}</Label>
      <TimelineBar />
      <Description>
        <StyledTitle level={3}>{title}</StyledTitle>
        <Text>{description}</Text>
      </Description>
    </Container>
  );
};
