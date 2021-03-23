import React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";

import Color from "../../styling/Color";
import { FlexColCenter } from "../../styling/layout/FlexContainer";
import useWindowSize from "../../../hooks/useWindowSize";
import DesktopItem from "./Item/DesktopItem";
import MobileItem from "./Item/MobileItem";

const Container = styled.div`
  padding: 2rem;
  background-color: ${Color.NEUTRAL_400};
`;

const StyledTitle = styled(Title)`
  text-align: center;
  && {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const items = [
  {
    label: "Feb 2020 - Apr 2021",
    company: "Skyscanner",
    title: "Software Engineer",
    description: `Full stack development of tools geared towards assisting the HR function.
    The tech was super developer productive, they had a tool that created templated microservices.
    This saved tons of time whilst maintaining company wide code standards. Skyscanner also has a
    great data pipeline from logging all the through to analysis.`,
  },
  {
    label: "Jul 2017 - Jan 2020",
    company: "PODFather",
    title: "Software Engineer",
    description: `Full stack development primarily based around the core mobile application.
    A cool product enabling logistics workers to sign off deliveries. Their electronic proof of
    delivery helped saved thousands of trees worth of paper.`,
  },
  {
    label: "Sep 2013 - Jul 2018",
    company: "University of Strathclyde",
    title: "Computer and Electronic Systems",
    description: `Undergraduate joint-degree between Electrical Engineering and Computer Science.
    I focused on Computer Science in my final year and worked on a Machine Learning dissertation.`,
  },
];
export default () => {
  const { width } = useWindowSize();
  const TimelineItem = width < 650 ? MobileItem : DesktopItem;
  return (
    <Container>
      <StyledTitle>A Brief History</StyledTitle>
      <FlexColCenter>
        {items.map(({ label, company, title, description }) => (
          <TimelineItem
            key={title}
            company={company}
            label={label}
            title={title}
            description={description}
          />
        ))}
      </FlexColCenter>
    </Container>
  );
};
