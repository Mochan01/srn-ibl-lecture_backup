import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";

export interface SlideProgressProviderProps {
  children: ReactNode;
}

type SlideProgressContextState = { slideProgress: number, setSlideProgress: Dispatch<number> };
export const SlideProgressContext = createContext<SlideProgressContextState>(null);

export const SlideProgressProvider: FC<SlideProgressProviderProps> = ({
  children
}) => {

  const [slideProgress, setSlideProgress] = useState(0);

  return (
    <SlideProgressContext.Provider value={ { slideProgress, setSlideProgress } }>
      { children }
    </SlideProgressContext.Provider>
  );
};
