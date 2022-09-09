import React, { FC, ReactNode, Dispatch, SetStateAction } from "react";
export interface IsStepEndProviderProps {
    children: ReactNode;
}
declare type IsStepEndContextState = {
    isStepEnd: boolean;
    setIsStepEnd: Dispatch<SetStateAction<boolean>>;
};
export declare const IsStepEndContext: React.Context<IsStepEndContextState>;
/**
 * リソースがロードされたか？を管理
 * @param param0
 * @returns
 */
export declare const IsStepEndProvider: FC<IsStepEndProviderProps>;
export {};
