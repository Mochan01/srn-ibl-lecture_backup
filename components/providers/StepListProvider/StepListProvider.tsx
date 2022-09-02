import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";
import { StepDataProps } from "../../../variable_types/StepDataProps";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface StepListProviderProps {
  stepsFactory: StepsFactory,
  children: ReactNode;
}

export type StepListProviderState
  = { stepList: StepDataProps[], setStepList: Dispatch<SetStateAction<StepDataProps[]>> };
export const StepListContext = createContext<StepListProviderState>(null);

/**
 * ステップの進捗管理
 * @param param0 
 * @returns 
 */
export const StepListProvider: FC<StepListProviderProps> = ({
  stepsFactory,
  children
}) => {

  const stepData = stepsFactory.getCurrentStepData(0, 0);
  const [stepList, setStepList] = useState([stepData]);

  return (
    <StepListContext.Provider value={ { stepList, setStepList } }>
      { children }
    </StepListContext.Provider>
  );
};
