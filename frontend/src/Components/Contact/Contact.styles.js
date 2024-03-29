import styled from "styled-components";

export const Wrapper = styled.div`
  height: 92vh;
  text-align: center;
`;

export const Content = styled.div`
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

  .con_box {
    display: flex;
    font-size: 3rem;
    padding: 1rem;
    justify-content: center;
    text-decoration: none;
    color: var(--medGray);
  }

  .con_box:hover {
    color: var(--lightGrey);
  }

  .con_box > * {
    padding: 0.5rem;
  }

  .linked_in {
    color: blue;
  }

  .icon {
    font-size: 4rem;
  }
`;
