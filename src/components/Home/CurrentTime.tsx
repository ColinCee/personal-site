import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Text from "antd/lib/typography/Text";

const StyledText = styled(Text)`
  font-size: 24px;
`;
export default () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(dayjs());
    }, 500);
    return () => clearInterval(id);
  }, []);

  return <StyledText>{currentTime.format("HH:mm:ss")}</StyledText>;
};
