import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";
import { Progress } from "src-ibl-lecture-master/types/StepType";

interface ProgressProviderProps {
  children: ReactNode;
}

type ContextState = { state: Progress; setState: Dispatch<SetStateAction<Progress>> };
export const ProgressProviderContext = createContext<ContextState>({} as ContextState);

export const ProgressProvider: FC<ProgressProviderProps> = ({ children }) => {
  const [state, setState] = useState<Progress>({ slide: 1, step: 1 });
  return (
    <ProgressProviderContext.Provider value={{ state, setState }}>
      {children}
    </ProgressProviderContext.Provider>
  );
};
