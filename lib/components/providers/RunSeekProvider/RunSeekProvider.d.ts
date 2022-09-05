import React, { FC, ReactNode, Dispatch, SetStateAction } from "react";
export interface RunSeekProviderProps {
    children: ReactNode;
}
declare type RunSeekContextState = {
    isRunSeek: boolean;
    setIsRunSeek: Dispatch<SetStateAction<boolean>>;
};
export declare const RunSeekContext: React.Context<RunSeekContextState>;
/**
 * シークバー アニメーション管理
 * @param param0
 * @returns
 */
export declare const RunSeekProvider: FC<RunSeekProviderProps>;
export {};
