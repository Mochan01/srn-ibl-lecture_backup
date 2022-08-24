import React, { FC, createContext, ReactNode } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface StepsFactoryProviderProps {
  stepsFactory: StepsFactory;
  children: ReactNode;
}

export const StepsFactoryContext = createContext<StepsFactory>(null);

export const StepsFactoryProvider: FC<StepsFactoryProviderProps> = ({
  stepsFactory,
  children
}) => {
  return (
    <StepsFactoryContext.Provider value={ stepsFactory }>
      { children }
    </StepsFactoryContext.Provider>
  );
};
