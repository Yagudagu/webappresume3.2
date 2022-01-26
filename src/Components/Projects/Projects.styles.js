import styled from "styled-components";

export const HeadThingy = styled.div`
  text-align: center;
  font-size: 40px;

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  height: 92vh;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 5%;
  padding: 0% 5% 10% 5%;
  background-color: var(--white);
`;

export const Content = styled.div`
  text-align: center;
  padding: 20vh 0vh;
  vertical-align: middle;

  @media (max-width: 768px) {
    padding: 10px 0px;
  }

  .btn {
    background-color: green;
    font-size: 20px;
    color: var(--white);
    margin-top: 1000px;
    padding: 16px 36px;
    border-radius: 30px;
    width: 200px;
    text-align: center;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 10px;
      padding: 8px 12px;
      width: 100vw;
    }

    @media (max-width: 290px) {
      font-size: 7px;
    }
  }

  .btn:hover {
    background-color: darkgreen;
  }

  h3 {
    padding: 20px 20px;
    @media (max-width: 768px) {
      padding: 20px 10px;
      display: inline;
    }
  }
`;
