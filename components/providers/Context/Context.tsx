import React, { FC, createContext, ReactNode, Dispatch } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
import { useManageProgress, UseAllProgress } from "../../../hooks/useManageProgress";

export interface ProgressProps {
  children: ReactNode;
}

export const ManageProgress
  = createContext<[UseAllProgress, Dispatch<UseAllProgress>]>(null);

export const StepsFactoryProvider = createContext<StepsFactory>(null);

export const Context: FC<ProgressProps> = ({
  children
}) => {

  const manageProgress = useManageProgress();

  return (
    <ManageProgress.Provider value={ manageProgress }>
      <StepsFactoryProvider.Provider value={ new StepsFactory() }>
        { children }
      </StepsFactoryProvider.Provider>
    </ManageProgress.Provider>
  );
};
