import React, { FC, createContext, ReactNode, Dispatch } from "react";
import {
  useGlobalStateReducer,
  GlobalState,
  GlobalStateAction,
} from "../../hooks";

export interface GlobalStateProviderProps {
  children: ReactNode;
  isPlaying?: boolean;
}

export const GlobalStateContext = createContext<GlobalState>({} as GlobalState);
export const GlobalDispatchContext = createContext<Dispatch<GlobalStateAction>>(
  {} as Dispatch<GlobalStateAction>
);

/**
 * レクチャー全体の状態管理を受け渡す
 * @returns
 */
export const GlobalStateProvider: FC<GlobalStateProviderProps> = ({
  children,
  isPlaying = false,
}) => {
  const [state, setState] = useGlobalStateReducer({ isPlaying });
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={setState}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
