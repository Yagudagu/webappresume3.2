import styled from "styled-components";

export const Wrapper = styled.iframe`
  height: 800px;
  width: 1000px;

  @media (max-width: 768px) {
    height: 300px;
    width: 375px;
  }
`;
