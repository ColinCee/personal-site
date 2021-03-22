import React from "react";
import styled, { keyframes } from "styled-components";

const Rotation = keyframes`
  to { transform: rotate(360deg) }
`;

const OrbitPath = styled.div`
  position: absolute;
  left: 0;
  top: calc(440px - 6rem);
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  z-index: 1;
  animation: ${Rotation} 30s ease-in-out infinite;
`;

const Container = styled.div`
  position: relative;
`;
const Circle = styled.div`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #b7e3fa;
`;

const CircleOne = styled(Circle)`
  left: 2.375rem;
  top: 2.375rem;
`;

const CircleTwo = styled(Circle)`
  left: 6.5rem;
`;

const CircleThree = styled(Circle)`
  top: 6.5rem;
`;
export default () => {
  return (
    <OrbitPath>
      <Container>
        <CircleOne />
        <CircleTwo />
        <CircleThree />
      </Container>
    </OrbitPath>
  );
};
