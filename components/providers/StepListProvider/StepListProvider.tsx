import React, { FC, createContext, ReactNode, Dispatch, useReducer, useContext } from "react";
import { StepProps } from "../../../variable_types/StepProps";
import { FactoryContext } from "../FactoryProvider/FactoryProvider";

export interface StepListProviderProps {
  children: ReactNode;
}

interface Action {
  type: "ADD" | "UPDATE";
  stepList: StepProps[];
}

export type StepListProviderState
  = { stepList: StepProps[], setStepList: Dispatch<Action> };

export const StepListContext = createContext<StepListProviderState>(null);

const reducerFunc = (state: StepProps[], action: Action)=> {
  switch (action.type) {
    case "ADD":
      return [...state, ...action.stepList];
    case "UPDATE":
      return action.stepList;
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

  const factory = useContext(FactoryContext);
  const [stepList, setStepList]
    = useReducer(reducerFunc, [factory.getCurrentStepData(0, 0)]);

  return (
    <StepListContext.Provider value={ { stepList, setStepList } }>
      { children }
    </StepListContext.Provider>
  );
};
