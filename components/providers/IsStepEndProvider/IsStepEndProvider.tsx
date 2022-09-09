import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface IsStepEndProviderProps {
  children: ReactNode;
}

type IsStepEndContextState
  = { isStepEnd: boolean, setIsStepEnd: Dispatch<SetStateAction<boolean>> };
export const IsStepEndContext = createContext<IsStepEndContextState>(null);

/**
 * リソースがロードされたか？を管理
 * @param param0 
 * @returns 
 */
export const IsStepEndProvider: FC<IsStepEndProviderProps> = ({
  children
}) => {

  const [isStepEnd, setIsStepEnd] = useState(false);

  return (
    <IsStepEndContext.Provider value={ { isStepEnd, setIsStepEnd } }>
      { children }
    </IsStepEndContext.Provider>
  );
};
