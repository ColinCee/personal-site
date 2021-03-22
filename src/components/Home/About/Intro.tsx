import React from "react";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { FlexCol, FlexRowCenter } from "../../styling/layout/FlexContainer";
import ProfilePic from "../../../images/linkedin_pic.jpg";

const Container = styled(FlexRowCenter)`
  margin-top: 2rem;
`;
const CirclarImage = styled.img`
  border-radius: 50%;
  width: 5.25rem;
  height: 5.25rem;
  margin-right: 2rem;
`;
const DegreeText = styled(Text)`
  & {
    font-weight: 300;
  }
`;
export default () => {
  return (
    <Container>
      <CirclarImage
        src={ProfilePic}
        alt="Man wearing backpack with blue sky and clouds in background"
      />
      <FlexCol>
        <Title level={3}>About Me</Title>
        <Text>Software Engineer at Skyscanner</Text>
        <DegreeText>
          BEng Computer and Electronic Systems @ University of Strathclyde
        </DegreeText>
      </FlexCol>
    </Container>
  );
};
