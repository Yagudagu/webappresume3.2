import styled from "styled-components";

export const Wrapper = styled.div`
  height: 92vh;
  text-align: center;
`;

export const Content = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: auto;
  margin: 0 20vw;

  @media (max-width: 768px) {
    width: 80vw;
    margin: 0 10vw;
  }

  h1 {
    @media (max-width: 768px) {
      font-size: 15px;
      width: auto;
    }
  }
`;
