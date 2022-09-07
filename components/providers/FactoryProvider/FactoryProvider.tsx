import React, { FC, createContext, ReactNode } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface FactoryProviderProps {
  children: ReactNode;
  data?: object;
}

export const FactoryContext = createContext<StepsFactory>(null);

/**
 * インスタンス
 * ｓrn-ibl-lecture/factories/StepsFactory.ts
 * を下に渡すためのProvider
 * @param param0 
 * @returns 
 */
export const FactoryProvider: FC<FactoryProviderProps> = ({
  children,
  data
}) => {

  const factory = new StepsFactory(data);

  return (
    <FactoryContext.Provider value={ factory }>
      { children }
    </FactoryContext.Provider>
  );
};
