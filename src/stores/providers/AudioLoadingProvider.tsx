import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";

interface Props {
  children: ReactNode;
}

type ContextState = { state: boolean; setState: Dispatch<boolean> };
export const AudioLoadingProviderContext = createContext<ContextState>(null);

export const AudioLoadingProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <AudioLoadingProviderContext.Provider value={{ state, setState }}>
      {children}
    </AudioLoadingProviderContext.Provider>
  );
};
