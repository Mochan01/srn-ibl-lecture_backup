import React, { FC, createContext, ReactNode } from "react";
import { JsonData } from "../types";

export interface JsonDataProviderProps {
  jsonData: JsonData[];
  children: ReactNode;
}

export const JsonDataProviderContext = createContext<JsonData[]>([]);

export const JsonDataProvider: FC<JsonDataProviderProps> = ({
  jsonData,
  children,
}) => {
  return (
    <JsonDataProviderContext.Provider value={jsonData}>
      {children}
    </JsonDataProviderContext.Provider>
  );
};
