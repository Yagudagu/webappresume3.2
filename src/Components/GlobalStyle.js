import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 1280px;
        --white: rgb(231, 243, 237);
        --lightGrey: #eee;
        --medGrey: #353535; 
        --darkGrey: #1c1c1c;
        --lightBrown: #bb995d;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        }

    * {
        box-sizing: border-box;
        font-family: Cambria, sans-serif;
    }

    body {  
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: var(--white);

      h1 {
        font-size: 32px;
        font-weight: 600;
        color: black;
        //text-decoration: none;
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        color: black;
        @media (max-width: 768px) {
          font-size: 10px;
        }
      }

      p {
        font-size: 16px;
        color: black;
      }
  }
`;
