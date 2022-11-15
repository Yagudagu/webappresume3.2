import styled from "styled-components";

export const Wrapper = styled.div`
  body {
    background-color: #143f6b;
    margin: 0;
    min-height: 100vh;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
  }

  .piano-container {
    display: flex;
    padding: 20vh 30vw;
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
