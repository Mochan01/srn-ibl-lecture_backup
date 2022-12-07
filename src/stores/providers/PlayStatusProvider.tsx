import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";

export interface PlayStatusProviderProps {
  children: ReactNode;
  isPlaying?: boolean;
}

type State = "PLAYING" | "CONTINUE" | "STOPPED";
type ContextState = { state: State; setState: Dispatch<State> };
export const PlayStatusProviderContext = createContext<ContextState>({} as ContextState);

export const PlayStatusProvider: FC<PlayStatusProviderProps> = ({ children, isPlaying = false }) => {
  const [state, setState] = useState<State>(isPlaying ? "PLAYING" : "STOPPED");

  return (
    <PlayStatusProviderContext.Provider value={{ state, setState }}>
      {children}
    </PlayStatusProviderContext.Provider>
  );
};
