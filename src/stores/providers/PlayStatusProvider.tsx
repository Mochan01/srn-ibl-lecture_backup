import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";

interface Props {
  children: ReactNode;
}

type State = "PLAYING" | "CONTINUE" | "STOPPED";
type ContextState = { state: State; setState: Dispatch<State> };
export const PlayStatusProviderContext = createContext<ContextState>(null);

export const PlayStatusProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>("STOPPED");

  return (
    <PlayStatusProviderContext.Provider value={{ state, setState }}>
      {children}
    </PlayStatusProviderContext.Provider>
  );
};
