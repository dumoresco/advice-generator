import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font: 400 1rem "Manrope", sans-serif;
    height: 100vh;
    background-color: var(--Dark-Blue);
    color: var(--Light-Cyan);
    font: 400 1rem "Manrope", sans-serif;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :root{
    --Light-Cyan: hsl(193, 38%, 86%);
    --Neon-Green: hsl(150, 100%, 66%);
    --Grayish-blue: hsl(217, 19%, 38%);
    --Dark-Grayish-Blue: hsl(217, 19%, 24%);
    --Dark-Blue: hsl(218, 23%, 16%);
  }

  button{
    border: none;
    background: none;
  }

`;
