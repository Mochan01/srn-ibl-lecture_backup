import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";

export interface StepsProgressProviderProps {
  children: ReactNode;
}

type StepsProgressProviderState = { stepsProgress: number, setStepsProgress: Dispatch<number> };
export const StepsProgressContext = createContext<StepsProgressProviderState>(null);

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
