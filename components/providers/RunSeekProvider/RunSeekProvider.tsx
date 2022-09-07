import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface RunSeekProviderProps {
  children: ReactNode;
}

type RunSeekContextState
  = { isRunSeek: boolean, setIsRunSeek: Dispatch<SetStateAction<boolean>> };
export const RunSeekContext = createContext<RunSeekContextState>(null);

/**
 * シークバー アニメーション管理
 * @param param0 
 * @returns 
 */
export const RunSeekProvider: FC<RunSeekProviderProps> = ({
  children
}) => {

  const [isRunSeek, setIsRunSeek] = useState(false);

  return (
    <RunSeekContext.Provider value={ { isRunSeek, setIsRunSeek } }>
      { children }
    </RunSeekContext.Provider>
  );
};
