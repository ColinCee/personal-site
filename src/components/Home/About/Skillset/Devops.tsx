import React from "react";
import styled from "styled-components";
import { ReactComponent as Docker } from "devicon/icons/docker/docker-original.svg";
import { ReactComponent as AWS } from "devicon/icons/amazonwebservices/amazonwebservices-original.svg";
import { ReactComponent as Git } from "devicon/icons/git/git-original.svg";
import { ReactComponent as Kubernetes } from "devicon/icons/kubernetes/kubernetes-plain.svg";
import { ReactComponent as Linux } from "devicon/icons/linux/linux-original.svg";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import GithubActions from "../../../../images/github_actions.png";
import Logo from "./Logo";
import { Container, IconContainer } from "./Layout";

export default () => {
  return (
    <Container>
      <Title level={3}>Devops</Title>
      <IconContainer>
        <Logo Icon={Docker} tooltipText="Docker" />
        <Logo
          Icon={GithubActions}
          altText="Github Actions Logo"
          tooltipText="Github Actions"
        />
        <Logo
          Icon={AWS}
          tooltipText="AWS (Lambda, API Gateway, SQS, SNS, S3, ECR, Elasticache)"
        />
        <Logo Icon={Git} tooltipText="Git" />
        <Logo Icon={Kubernetes} tooltipText="Kubernetes" />
        <Logo Icon={Linux} tooltipText="Linux" />
      </IconContainer>
    </Container>
  );
};
