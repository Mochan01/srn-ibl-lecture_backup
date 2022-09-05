import React, { FC, ReactNode, Dispatch } from "react";
import { StepProps } from "../../../variable_types/StepProps";
export interface StepListProviderProps {
    children: ReactNode;
}
interface Action {
    type: "ADD" | "UPDATE";
    stepList: StepProps[];
}
interface ResetAction {
    type: "INIT";
    slideProgress: number;
}
export declare type StepListProviderState = {
    stepList: StepProps[];
    setStepList: Dispatch<Action | ResetAction>;
};
export declare const StepListContext: React.Context<StepListProviderState>;
/**
 * ステップの進捗管理
 * @param param0
 * @returns
 */
export declare const StepListProvider: FC<StepListProviderProps>;
export {};
