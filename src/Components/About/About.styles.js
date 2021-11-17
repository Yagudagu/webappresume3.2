import styled from "styled-components";

export const Wrapper = styled.div`
  height: 92vh;
  text-align: center;

  p {
    font-size: 30px;
    width: 60%;
    margin: 10% 20%;
    text-align: center;
    border-color: var(--darkGrey);
    border-style: solid;
    border-radius: 5px;
    padding: 8px;

    @media (max-width: 768px) {
      font-size: 15px;
      width: 86%;
      padding: 2px;
      margin: 7%;
    }
  }

  #first {
    margin-top: 20vh;
  }
`;

export const Content = styled.div``;
