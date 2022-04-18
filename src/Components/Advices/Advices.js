import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Spinner } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Pattern from "../../Assets/pattern.svg";
import Dice from "../../Assets/icon-dice.svg";

export default function Advices() {
  const [advice, setAdvice] = useState({});
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      isLoading(true);

      const response = await fetch("https://api.adviceslip.com/advice");

      const data = await response.json();

      setAdvice(data);

      try {
      } catch (err) {
        console.log(err);
      } finally {
        isLoading(false);
      }
    }
    getData();
  }, []);

  async function handleGetAdvice() {
    isLoading(true);

    const response = await fetch("https://api.adviceslip.com/advice");

    const data = await response.json();

    setAdvice(data);

    try {
    } catch (err) {
      console.log(err);
    } finally {
      isLoading(false);
    }
  }

  return (
    <>
      <Container>
        <p className="advice-id">
          {loading ? (
            <Skeleton
              width={"10rem"}
              enableAnimation={true}
              baseColor={"hsl(150, 100%, 66%)"}
            />
          ) : (
            ` Advice #${advice.slip.id}`
          )}
        </p>
        <p className="advice-text">
          {loading ? (
            <Skeleton count={1.5} width={"20rem"} baseColor={"#DCDCDC"} />
          ) : (
            `${advice.slip.advice}`
          )}
        </p>
        <img src={Pattern} alt="Pattern advice" />
        <button onClick={handleGetAdvice}>
          {loading ? (
            <svg viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20"></circle>
            </svg>
          ) : (
            <img src={Dice} alt="Dice icon" />
          )}
        </button>
      </Container>
    </>
  );
}
