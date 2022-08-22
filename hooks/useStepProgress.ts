import { useState, useEffect } from "react";
import { SlideProps } from "../components/molecules/Slide/Slide";

export const useStepProgress = (len: number) => {

  // 1はじまり
  const [step, setStep] = useState(1);

  useEffect(() => {

    // For debugging.
    window.addEventListener("keydown", ({ key }) => {

      setStep(state => {

        if (key === "ArrowRight") {
          return state >= len ? state : state + 1;
        }

        return state <= 1 ? 1 : state - 1;
      });

    });
  }, []);

  return step;
};
