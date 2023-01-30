import React, { FC, createContext, ReactNode, Dispatch } from "react";
import {
  SatelliteAssemblyAction,
  SatelliteAssemblyState,
  useSatelliteAssemblyReducer,
} from "../hooks/";

interface SatelliteAssemblyProviderProps {
  initialValue: SatelliteAssemblyState;
  children?: ReactNode;
}

export const SatelliteAssemblyStateContext =
  createContext<SatelliteAssemblyState>({} as SatelliteAssemblyState);
export const SatelliteAssemblyDispatchContext = createContext<
  Dispatch<SatelliteAssemblyAction>
>({} as Dispatch<SatelliteAssemblyAction>);

/**
 * ルーブリック設定に必要なデータの管理
 * @param param0
 * @returns
 */
export const SatelliteAssemblyProvider: FC<SatelliteAssemblyProviderProps> = ({
  initialValue,
  children,
}) => {
  const [state, dispatch] = useSatelliteAssemblyReducer(initialValue);
  return (
    <SatelliteAssemblyStateContext.Provider value={state}>
      <SatelliteAssemblyDispatchContext.Provider value={dispatch}>
        {children}
      </SatelliteAssemblyDispatchContext.Provider>
    </SatelliteAssemblyStateContext.Provider>
  );
};
