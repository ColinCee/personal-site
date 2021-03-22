import React from "react";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";
import FlexContainer, {
  FlexColCenter,
} from "../../styling/layout/FlexContainer";
import Color from "../../styling/Color";
import Blockquote from "../../styling/typography/Blockquote";

const Container = styled(FlexColCenter)`
  max-width: 40rem;
  margin-inline: auto;
  margin-top: 5rem;
`;

export default () => {
  return (
    <Container>
      <Text>
        I love building things. I love using technologies that help save time
        and solve interesting problems. Many of my personal projects have been
        for fun or to learn a new technology, including this website! However we
        always need to balance personal interests and optimal business
        solutions.
        <br />
        <br /> My commercial years of experience has taught me many things, the
        one that stands out is: not every buisness requirement needs a complex
        solution or new framework.
      </Text>
      <Blockquote>
        Keep It Simple Stupid
        <span>Some guy</span>
      </Blockquote>
    </Container>
  );
};
