import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface StepsProgressProviderProps {
  children: ReactNode;
}

type StepsProgressProviderState
  = { stepsProgress: number, setStepsProgress: Dispatch<SetStateAction<number>> };
export const StepsProgressContext = createContext<StepsProgressProviderState>(null);

/**
 * スライド内のステップの進捗を管理
 * @param param0 
 * @returns 
 */
export const StepsProgressProvider: FC<StepsProgressProviderProps> = ({
  children
}) => {

  const [stepsProgress, setStepsProgress] = useState(0);

  return (
    <StepsProgressContext.Provider value={ { stepsProgress, setStepsProgress } }>
      { children }
    </StepsProgressContext.Provider>
  );
};
