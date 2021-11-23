import styled from "styled-components";

export const Wrapper = styled.div`
  .piano-container {
    display: flex;
  }

  .key {
    height: calc(var(--width) * 4);
    width: var(--width);
  }

  .white.active {
    background-color: #ccc;
  }

  .white {
    --width: 120px;
    background-color: white;
    border: 1px solid #333;

    @media (max-width: 768px) {
      --width: 40px;
    }
  }

  .black.white.active {
    background-color: #333;
  }

  .black {
    --width: 80px;
    background-color: black;
    margin-left: calc(var(--width) / -2);
    margin-right: calc(var(--width) / -2);
    z-index: 2;

    @media (max-width: 768px) {
      --width: 20px;
    }
  }
  .return-to-main {
    text-decoration: none;
    margin-top: 100px;
    padding: 3px;
    font-size: 30px;
    border: 2px solid black;
    border-radius: 20px;
  }
`;

export const Grid = styled.div`
  margin: 0 auto;
  padding: 2rem 2.5vw;
  display: grid;
  grid-template-columns: 55vw 45vw;
  grid-column-gap: 5vw;
`;
