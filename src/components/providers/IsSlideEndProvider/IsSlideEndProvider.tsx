import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface IsSlideEndProviderProps {
  children: ReactNode;
}

type IsSlideEndContextState
  = { isSlideEnd: boolean, setIsSlideEnd: Dispatch<SetStateAction<boolean>> };
export const IsSlideEndContext = createContext<IsSlideEndContextState>(null);

/**
 * リソースがロードされたか？を管理
 * @param param0 
 * @returns 
 */
export const IsSlideEndProvider: FC<IsSlideEndProviderProps> = ({
  children
}) => {

  const [isSlideEnd, setIsSlideEnd] = useState(false);

  return (
    <IsSlideEndContext.Provider value={ { isSlideEnd, setIsSlideEnd } }>
      { children }
    </IsSlideEndContext.Provider>
  );
};
