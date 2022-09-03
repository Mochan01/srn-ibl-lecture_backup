import React, { FC, createContext, ReactNode, Dispatch, useReducer } from "react";
import { StepDataProps } from "../../../variable_types/StepDataProps";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface StepListProviderProps {
  children: ReactNode;
}

interface Action {
  type: "ADD" | "UPDATE";
  stepList: StepDataProps[];
}

interface ResetAction {
  type: "INIT";
  slideProgress: number;
}

export type StepListProviderState
  = { stepList: StepDataProps[], setStepList: Dispatch<Action | ResetAction> };

export const StepListContext = createContext<StepListProviderState>(null);

const reducerFunc = (state: StepDataProps[], action: Action | ResetAction)=> {
  switch (action.type) {
    case "ADD":
      return [...state, ...action.stepList];
    case "UPDATE":
      return action.stepList;
    case "INIT":
      return [StepsFactory.getCurrentStepData(action.slideProgress, 0)];
  }
};

/**
 * ステップの進捗管理
 * @param param0 
 * @returns 
 */
export const StepListProvider: FC<StepListProviderProps> = ({
  children
}) => {

  const [stepList, setStepList]
    = useReducer(reducerFunc, [StepsFactory.getCurrentStepData(0, 0)]);

  return (
    <StepListContext.Provider value={ { stepList, setStepList } }>
      { children }
    </StepListContext.Provider>
  );
};
