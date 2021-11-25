import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid var(--medGrey);
  height: 10rem;
  border-radius: 5px;
  max-width: 20rem;
  display: flex;
  background-color: var(--lightGrey);
  margin: 0 auto;
  align-items: center;
  padding: 0.5rem;

  #keyboard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 10rem;
  }

  #keyboard-controls {
    text-align: center;
    margin: 0 auto 0 0.5rem;
  }

  #sound-type {
    border: 1px solid var(--medGrey);
    border-radius: 5px;
  }
`;
