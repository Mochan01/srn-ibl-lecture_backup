import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface PauseProviderProps {
  children: ReactNode;
}

type PauseProviderState = { pause: boolean, setPause: Dispatch<SetStateAction<boolean>> };
export const PauseContext = createContext<PauseProviderState>(null);

/**
 * 再生 / 停止の状態を管理
 * @param param0 
 * @returns 
 */
export const PauseProvider: FC<PauseProviderProps> = ({
  children
}) => {

  const [pause, setPause] = useState(false);

  return (
    <PauseContext.Provider value={ { pause, setPause } }>
      { children }
    </PauseContext.Provider>
  );
};
