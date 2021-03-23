import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1;
  margin: 1rem;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3em);
  gap: 1.5em;
  margin-top: 1em;
  svg,
  img {
    width: 3rem;
    height: 3rem;
  }
`;
