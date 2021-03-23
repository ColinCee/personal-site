import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Color from "../../styling/Color";

const Timeline = styled.div`
  position: relative;
  width: 1px;
  background-color: rgba(20, 20, 20, 0.1);
  margin-inline: 4rem;
`;

const IconContainer = styled.span`
  position: absolute;
  z-index: 1;
  left: -0.6em;
  top: 3em;
`;

export default () => {
  return (
    <Timeline>
      <IconContainer className="fa-layers fa-fw">
        <FontAwesomeIcon
          icon={faCircle}
          transform="grow-24"
          style={{ color: Color.PRIMARY_100 }}
        />
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{ color: Color.ACCENT_900 }}
          transform="grow-4"
        />
      </IconContainer>
    </Timeline>
  );
};
