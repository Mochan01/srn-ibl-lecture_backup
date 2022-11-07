import { GetStepData } from "../utils";
import { useReducer } from "react";
import { StepType } from "src-ibl-lecture-master/variable_types/StepType";

type ActionValue = "next" | "prev" | number;

export type Action = {
  [key in "slide" | "step"]?: ActionValue;
};

export interface State {
  slide: number;
  step: number;
}

const initIndex = 1 as const;

const reducer = (getData: GetStepData) => (state: State, action: Action) => {

  if (action.slide) {
    if (typeof action.slide === "number") {
      return { ...state, slide: action.slide, step: initIndex };
    } else {
      switch (action.slide) {
        case "next":
          if (!getData(state.slide + 1)) return state;
          return { ...state, slide: state.slide + 1, step: initIndex };
        case "prev":
          if (!getData(state.slide - 1)) return state;
          return { ...state, slide: state.slide - 1, step: initIndex };
      }
    }
  }


  if (action.step) {
    if (typeof action.step === "number") {
      return { ...state, step: action.step };
    } else {
      switch (action.step) {
        case "next":
          if (!getData(state.slide, state.step + 1)) {
            if (!getData(state.slide + 1)) {
              return state;
            }

            return { ...state, slide: state.slide + 1, step: initIndex };
          }

          return { ...state, step: state.step + 1 };
        case "prev":
          if (!getData(state.slide, state.step - 1)) {
            if (!getData(state.slide - 1)) {
              return state;
            }

            return {
              ...state,
              slide: state.slide - 1,
              step: (getData(state.slide - 1) as StepType[]).length,
            };
          }

          return { ...state, step: state.step - 1 };
      }
    }
  }
};

const initState: State = { slide: initIndex, step: initIndex };

export const useProgress = (getData: GetStepData) =>
  useReducer(reducer(getData), initState);
