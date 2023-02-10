import React, { FC, createContext, ReactNode, Dispatch, useState } from "react";

interface Props {
  children: ReactNode;
}

type ContextState = { state: number; setState: Dispatch<number> };
export const SeekProviderContext = createContext<ContextState>({} as ContextState);

export const SeekProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState(0);

  return (
    <SeekProviderContext.Provider value={{ state, setState }}>
      {children}
    </SeekProviderContext.Provider>
  );
};
