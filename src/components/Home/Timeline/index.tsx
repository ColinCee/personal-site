import React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import { Timeline } from "antd";

import Color from "../../styling/Color";
import HorizontalMargin from "../../styling/layout/HorizontalMargin";
import TimelineItem from "./TimelineItem";
import { FlexColCenter } from "../../styling/layout/FlexContainer";

const Container = styled(HorizontalMargin)`
  padding: 2rem;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  && {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default () => {
  return (
    <Container>
      <StyledTitle>A Brief History</StyledTitle>
      <FlexColCenter>
        <TimelineItem
          label="Feb 2020 - Apr 2021"
          title="Software Engineer at Skyscanner"
          description="Full stack development of tools geared towards assisting the HR function.
          The tech was super developer productive, they had a tool that created templated microservices.
          This saved tons of time whilst maintaining company wide code standards. Skyscanner also has a
          great data pipeline from logging all the through to analysis."
        />
        <TimelineItem
          label="Jul 2017 - Jan 2020"
          title="Software Engineer at PODFather"
          description="Full stack development primarily based around the core mobile application.
          A cool product enabling logistics workers to sign off deliveries. Their electronicproof of
          delivery helped saved thousands of trees worth of paper."
        />
        <TimelineItem
          label="Jul 2017 - Jan 2020"
          title="Software Engineer at PODFather"
          description="Full stack development primarily based around the core mobile application.
          A cool product enabling logistics workers to sign off deliveries. Their electronicproof of
          delivery helped saved thousands of trees worth of paper."
        />
      </FlexColCenter>
    </Container>
  );
};
