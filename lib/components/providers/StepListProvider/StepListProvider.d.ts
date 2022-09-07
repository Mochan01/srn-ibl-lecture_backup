import React, { FC, ReactNode, Dispatch } from "react";
import { StepProps } from "../../../variable_types/StepProps";
export interface StepListProviderProps {
    children: ReactNode;
}
interface Action {
    type: "ADD" | "UPDATE";
    stepList: StepProps[];
}
export declare type StepListProviderState = {
    stepList: StepProps[];
    setStepList: Dispatch<Action>;
};
export declare const StepListContext: React.Context<StepListProviderState>;
/**
 * ステップの進捗管理
 * @param param0
 * @returns
 */
export declare const StepListProvider: FC<StepListProviderProps>;
export {};
