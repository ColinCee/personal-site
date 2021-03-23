import styled from "styled-components";
import Color from "../Color";

export default styled.blockquote`
  font-size: 1.4em;
  margin-block: 4rem;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1rem 1rem 1rem 5rem;
  border-left: 8px solid ${Color.ACCENT_900};
  line-height: 1.6;
  position: relative;

  span {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;
  }

  &&:before {
    font-family: Arial;
    content: "“";
    color: ${Color.ACCENT_900};
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
  }

  &&:after {
    content: "";
  }
`;
