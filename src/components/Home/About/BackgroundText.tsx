import React from "react";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";
import { FlexColCenter } from "../../styling/layout/FlexContainer";
import Blockquote from "../../styling/typography/Blockquote";

const Container = styled(FlexColCenter)`
  max-width: 50rem;
  margin-inline: auto;
  margin-top: 5rem;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledText = styled(Text)`
  padding: 1rem;
`;
export default () => {
  return (
    <Container>
      <TextContainer>
        <StyledText>
          I love building things. I love using technologies that help save time
          and solve interesting problems. Many of my personal projects have been
          for fun or to learn a new technology, including this website! I try to
          keep up with the latest technologies.
        </StyledText>
        <StyledText>
          However we always need to balance personal interests and optimal
          business solutions. My commercial years of experience has taught me
          many things, the one that stands out is: not every buisness
          requirement needs a complex solution or new framework.
        </StyledText>
      </TextContainer>
      <Blockquote>
        Keep It Simple Stupid
        <span>- Some guy</span>
      </Blockquote>
    </Container>
  );
};
