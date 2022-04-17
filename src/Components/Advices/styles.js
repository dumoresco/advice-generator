import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 26rem;
  background-color: var(--Dark-Grayish-Blue);
  padding: 1.25rem;
  border-radius: 0.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;

  .advice-id {
    color: var(--Neon-Green);
    font-size: 0.8rem;
    font-size: 400;
    letter-spacing: 0.3rem;
    text-transform: uppercase;

    margin: 1.5rem 0;
  }

  .advice-text {
    text-align: center;
    font-weight: 800;
    font-size: 1.5rem;

    margin-bottom: 1.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -1.5rem;

    background-color: var(--Neon-Green);
    padding: 1rem;
    border-radius: 100%;

    cursor: pointer;
    transition: background-color 0.2s, box-shadow 0.2s;
  }
  button:hover {
    background-color: hsl(150, 100%, 50%);
    box-shadow: 0px 0px 20px hsl(150, 100%, 50%);
  }

  svg {
    width: 1.75em;
    transform-origin: center;
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--Dark-Grayish-Blue);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
