import React, { ComponentType } from "react";
import { Tooltip } from "antd";
import styled from "styled-components";

type SVGProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tooltipText: string;
};

type ImageProps = {
  Icon: string;
  altText: string;
  tooltipText: string;
};

type Props = SVGProps | ImageProps;

const isImageProp = (props: Props): props is ImageProps => {
  return typeof props.Icon === "string";
};

export default (props: SVGProps | ImageProps) => {
  const { tooltipText, Icon } = props;
  if (isImageProp(props)) {
    return (
      <Tooltip title={props.tooltipText}>
        <img src={props.Icon} alt={props.altText} />
      </Tooltip>
    );
  }

  return (
    <Tooltip title={tooltipText}>
      <Icon />
    </Tooltip>
  );
};
