import { useReducer, useEffect } from "react";

type StepProgressState = number;
type StepProgressAction = "ArrowRight" | "ArrowLeft";

export const useStepProgress = (len: number) => {

  const reducer = (
    state: StepProgressState,
    action: StepProgressAction
  ): StepProgressState => {
    switch(action) {
      case "ArrowRight":
        return state >= len - 1 ? state : state + 1;
      default:
        return state <= 0 ? 0 : state - 1;
    }
  };

  // 0はじまり
  const initState: StepProgressState = 0;

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {

    // For debugging.
    window.addEventListener("keydown", (e) => {
      const key = e.key as StepProgressAction;
      dispatch(key);
    });

  }, []);

  return state;
};
