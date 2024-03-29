import styled from "styled-components";

export const Wrapper = styled.div`
  .return-to-main {
    text-decoration: none;
    margin-top: 50px;
    padding: 3px;
    font-size: 30px;
    border: 2px solid black;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  text-align: center;

  #signature {
    width: auto;
    margin-left: 200px;
    font-size: 50px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const Quote = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
