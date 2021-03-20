import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import secret from "../../../secret.json";

const StyledLoading = styled(LoadingOutlined)`
  margin-left: 0.5em;
`;
export default () => {
  const [visits, setVisits] = useState(-1);
  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const currentTime = dayjs();
        const message = secret.key + currentTime.unix();
        const hashDigest = sha256(message);
        const hash = Base64.stringify(hashDigest);

        const { data } = await axios.get(secret.apiUrl, {
          params: {
            time: currentTime.unix(),
            hash,
          },
        });
        setVisits(data.count);
      } catch (error) {
        console.error(
          "Whoops, looks like the visitor tracking server is down :("
        );
      }
    };
    fetchVisitCount();
  }, []);

  return <div>Page Visits: {visits === -1 ? <StyledLoading /> : visits}</div>;
};
