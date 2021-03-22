import React from "react";
import styled from "styled-components";
import { ReactComponent as Docker } from "devicon/icons/docker/docker-original.svg";
import { ReactComponent as AWS } from "devicon/icons/amazonwebservices/amazonwebservices-original.svg";
import { ReactComponent as Git } from "devicon/icons/git/git-original.svg";
import { ReactComponent as Kubernetes } from "devicon/icons/kubernetes/kubernetes-plain.svg";
import { ReactComponent as Linux } from "devicon/icons/linux/linux-original.svg";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import GithubActions from "../../../images/github_actions.png";
import Logo from "./Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  width: calc(5 * 4em);
`;
const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4em);
  gap: 2em;
  margin-top: 1em;
  * {
    width: 4em;
    height: 4em;
  }
`;
export default () => {
  return (
    <Container>
      <Title level={2}>Devops</Title>
      <IconContainer>
        <Logo icon={<Docker />} tooltipText="Docker" />
        <Logo
          icon={<img src={GithubActions} alt="Github Actions Logo" />}
          tooltipText="Github Actions"
        />
        <Logo
          icon={<AWS />}
          tooltipText="AWS (Lambda, API Gateway, SQS, SNS, S3, ECR, Elasticache)"
        />
        <Logo icon={<Git />} tooltipText="Git" />
        <Logo icon={<Kubernetes />} tooltipText="Kubernetes" />
        <Logo icon={<Linux />} tooltipText="Linux" />
      </IconContainer>
    </Container>
  );
};
