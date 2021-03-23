import Text from "antd/lib/typography/Text";
import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../styling/layout/HorizontalMargin";
import Interactions from "./Interactions";

const Background = styled.div`
  background-color: #f6f6f6;
  height: 35rem;
  @media (min-width: 450px) {
    height: 27rem;
  }
`;

const Container = styled(HorizontalMargin)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const TitleText = styled(Text)`
  font-size: 68px;
`;

const SubtitleText = styled(Text)`
  font-size: 16px;
  margin-top: 1em;
`;

const Banner = () => {
  return (
    <Background>
      <Container>
        <TitleText>Colin Cheung</TitleText>
        <SubtitleText>
          Software Engineer, Machine Learning Enthusiast, Backseat Gamer
        </SubtitleText>
        <Interactions />
      </Container>
    </Background>
  );
};

export default Banner;
