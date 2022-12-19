import React, { FC, createContext, ReactNode } from "react";
import { GetStepData } from "../../utils";

interface Props {
  getData: GetStepData;
  children: ReactNode;
}

export const GetDataProviderContext = createContext<GetStepData>({} as GetStepData);

export const GetDataProvider: FC<Props> = ({ getData, children }) => {
  return (
    <GetDataProviderContext.Provider value={getData}>
      {children}
    </GetDataProviderContext.Provider>
  );
};
