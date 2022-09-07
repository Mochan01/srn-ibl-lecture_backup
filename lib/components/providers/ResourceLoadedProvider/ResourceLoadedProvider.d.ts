import React, { FC, ReactNode, Dispatch, SetStateAction } from "react";
export interface ResourceLoadedProviderProps {
    children: ReactNode;
}
declare type ResourceLoadedContextState = {
    resourceLoaded: boolean;
    setResourceLoaded: Dispatch<SetStateAction<boolean>>;
};
export declare const ResourceLoadedContext: React.Context<ResourceLoadedContextState>;
/**
 * リソースがロードされたか？を管理
 * @param param0
 * @returns
 */
export declare const ResourceLoadedProvider: FC<ResourceLoadedProviderProps>;
export {};
