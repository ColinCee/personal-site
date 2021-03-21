import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import HorizontalMargin from "../Layout/HorizontalMargin";
import Banner from "./Banner";
import Timeline from "./Timeline";

const Home = () => {
  return (
    <>
      <Banner />
      <Timeline />
    </>
  );
};

export default Home;
