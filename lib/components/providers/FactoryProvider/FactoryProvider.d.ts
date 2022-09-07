import React, { FC, ReactNode } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
export interface FactoryProviderProps {
    children: ReactNode;
    data?: object;
}
export declare const FactoryContext: React.Context<StepsFactory>;
/**
 * インスタンス
 * ｓrn-ibl-lecture/factories/StepsFactory.ts
 * を下に渡すためのProvider
 * @param param0
 * @returns
 */
export declare const FactoryProvider: FC<FactoryProviderProps>;
