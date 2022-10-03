import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface SlideProgressProviderProps {
  children: ReactNode;
}

type SlideProgressContextState
  = { slideProgress: number, setSlideProgress: Dispatch<SetStateAction<number>> };
export const SlideProgressContext = createContext<SlideProgressContextState>(null);

/**
 * スライドの進捗を管理
 * @param param0 
 * @returns 
 */
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
