import React, { FC, createContext, ReactNode, Dispatch } from "react";
import { useProgress, State, Action } from "../../hooks/useProgress";
import { GetStepData } from "../../utils";

interface Props {
  getData: GetStepData;
  children: ReactNode;
}

type ContextState = { state: State; setState: Dispatch<Action> };
export const ProgressProviderContext = createContext<ContextState>({} as ContextState);

export const ProgressProvider: FC<Props> = ({ getData, children }) => {
  const [state, setState] = useProgress(getData);

  return (
    <ProgressProviderContext.Provider value={{ state, setState }}>
      {children}
    </ProgressProviderContext.Provider>
  );
};
