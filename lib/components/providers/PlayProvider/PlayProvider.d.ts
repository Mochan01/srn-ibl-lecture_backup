import React, { FC, ReactNode, Dispatch, SetStateAction } from "react";
export interface PlayProviderProps {
    children: ReactNode;
}
declare type PlayProviderState = {
    play: boolean;
    setPlay: Dispatch<SetStateAction<boolean>>;
};
export declare const PlayContext: React.Context<PlayProviderState>;
/**
 * 再生 / 停止の状態を管理
 * @param param0
 * @returns
 */
export declare const PlayProvider: FC<PlayProviderProps>;
export {};
