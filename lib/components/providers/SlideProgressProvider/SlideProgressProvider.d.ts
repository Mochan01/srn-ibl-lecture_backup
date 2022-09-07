import React, { FC, ReactNode, Dispatch, SetStateAction } from "react";
export interface SlideProgressProviderProps {
    children: ReactNode;
}
declare type SlideProgressContextState = {
    slideProgress: number;
    setSlideProgress: Dispatch<SetStateAction<number>>;
};
export declare const SlideProgressContext: React.Context<SlideProgressContextState>;
/**
 * スライドの進捗を管理
 * @param param0
 * @returns
 */
export declare const SlideProgressProvider: FC<SlideProgressProviderProps>;
export {};
