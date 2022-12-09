import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface PlayStatusProviderProps {
  children: ReactNode;
  isPlaying?: boolean;
}

type ContextState = { state: boolean; setState: Dispatch<SetStateAction<boolean>> };
export const PlayStatusProviderContext = createContext<ContextState>({} as ContextState);

export const PlayStatusProvider: FC<PlayStatusProviderProps> = ({ children, isPlaying = false }) => {
  const [state, setState] = useState(isPlaying);

  return (
    <PlayStatusProviderContext.Provider value={{ state, setState }}>
      {children}
    </PlayStatusProviderContext.Provider>
  );
};
