import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface SeekProgressProviderProps {
  children: ReactNode;
}

type SeekProgressProviderState
  = { seekProgress: number, setSeekProgress: Dispatch<SetStateAction<number>> };
export const SeekProgressContext = createContext<SeekProgressProviderState>(null);

/**
 * シークバーの進捗を管理
 * @param param0 
 * @returns 
 */
export const SeekProgressProvider: FC<SeekProgressProviderProps> = ({
  children
}) => {

  const [seekProgress, setSeekProgress] = useState(0);

  return (
    <SeekProgressContext.Provider value={ { seekProgress, setSeekProgress } }>
      { children }
    </SeekProgressContext.Provider>
  );
};
