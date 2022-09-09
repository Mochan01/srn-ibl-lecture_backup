import React, { FC, ReactNode, Dispatch, SetStateAction } from "react";
export interface IsSlideEndProviderProps {
    children: ReactNode;
}
declare type IsSlideEndContextState = {
    isSlideEnd: boolean;
    setIsSlideEnd: Dispatch<SetStateAction<boolean>>;
};
export declare const IsSlideEndContext: React.Context<IsSlideEndContextState>;
/**
 * リソースがロードされたか？を管理
 * @param param0
 * @returns
 */
export declare const IsSlideEndProvider: FC<IsSlideEndProviderProps>;
export {};
