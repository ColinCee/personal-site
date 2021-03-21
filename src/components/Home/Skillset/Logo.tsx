import React from "react";
import { Tooltip } from "antd";

type Props = {
  icon: JSX.Element;
  tooltipText: string;
};
export default ({ icon, tooltipText }: Props) => {
  return <Tooltip title={tooltipText}>{icon}</Tooltip>;
};
