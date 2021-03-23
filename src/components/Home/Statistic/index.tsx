import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Text from "antd/lib/typography/Text";
import CurrentTime from "./CurrentTime";
import PageCount from "./PageCount";

const Hide = keyframes`
  from {opacity: 1;}
  to {opacity: 0;} 
`;

const Show = keyframes`
  from {opacity: 0; transform: translateX(8rem)}
  to {opacity: 1; transform: translateX(0px)} 
`;

const Container = styled(Text)`
  font-size: 24px;
`;
const Animated = styled.span<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  animation: ${({ show }) => (show ? Show : Hide)} 400ms ease-in;
`;
export default () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggle(!toggle);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [toggle]);

  return (
    <Container>
      <Animated show={toggle}>
        <CurrentTime />
      </Animated>
      <Animated show={!toggle}>
        <PageCount />
      </Animated>
    </Container>
  );
};
