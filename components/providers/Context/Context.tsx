import React, { FC, createContext, ReactNode, Dispatch } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
import { useManageProgress, UseAllProgress } from "../../../hooks/useManageProgress";

export interface ProgressProps {
  stepsFactory: StepsFactory;
  children: ReactNode;
}

export const ManageProgress
  = createContext<[UseAllProgress, Dispatch<UseAllProgress>]>(null);

export const StepsFactoryProvider = createContext<StepsFactory>(null);

export const Context: FC<ProgressProps> = ({
  stepsFactory,
  children
}) => {

  const manageProgress = useManageProgress();

  return (
    <ManageProgress.Provider value={ manageProgress }>
      <StepsFactoryProvider.Provider value={ stepsFactory }>
        { children }
      </StepsFactoryProvider.Provider>
    </ManageProgress.Provider>
  );
};
