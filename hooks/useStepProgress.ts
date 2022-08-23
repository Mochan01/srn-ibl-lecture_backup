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
        return state >= len ? state : state + 1;
      default:
        return state <= 1 ? 1 : state - 1;
    }
  };

  // 1はじまり
  const initialState: StepProgressState = 1;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    // For debugging.
    window.addEventListener("keydown", (e) => {
      const key = e.key as StepProgressAction;
      dispatch(key);
    });

  }, []);

  return state;
};
