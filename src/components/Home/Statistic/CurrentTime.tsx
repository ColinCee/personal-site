import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Text from "antd/lib/typography/Text";

export default () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(dayjs());
    }, 500);
    return () => clearInterval(id);
  }, []);

  return <Text>{currentTime.format("HH:mm:ss")}</Text>;
};
