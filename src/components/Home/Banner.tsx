import Text from "antd/lib/typography/Text";
import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../Layout/HorizontalMargin";
import Interactions from "./Interactions";

const Background = styled.div`
  background-color: #f6f6f6;
  height: 440px;
  width: 100vw;
`;

const Container = styled(HorizontalMargin)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled(Text)`
  font-size: 68px;
  margin-top: 0.75em;
`;

const SubtitleText = styled(Text)`
  font-size: 16px;
  margin-top: 2em;
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
