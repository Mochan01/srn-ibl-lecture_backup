import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface ProgressProps {
  stepsFactory: StepsFactory;
  children: ReactNode;
}

type SlideProgressContextState = { slideProgress: number, setSlideProgress: Dispatch<number> };
export const SlideProgressContext = createContext<SlideProgressContextState>(null);

type StepsProgressContextState = { stepsProgress: number, setStepsProgress: Dispatch<number> };
export const StepsProgressContext = createContext<StepsProgressContextState>(null);

export const StepsFactoryContext = createContext<StepsFactory>(null);

export const Context: FC<ProgressProps> = ({
  stepsFactory,
  children
}) => {

  const [slideProgress, setSlideProgress] = useState(0);
  const [stepsProgress, setStepsProgress] = useState(0);

  return (
    <SlideProgressContext.Provider value={ { slideProgress, setSlideProgress } }>
      <StepsProgressContext.Provider value={ { stepsProgress, setStepsProgress } }>
        <StepsFactoryContext.Provider value={ stepsFactory }>
          { children }
        </StepsFactoryContext.Provider>
      </StepsProgressContext.Provider>
    </SlideProgressContext.Provider>
  );
};
