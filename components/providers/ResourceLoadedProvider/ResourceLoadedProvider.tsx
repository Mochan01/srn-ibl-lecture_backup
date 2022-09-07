import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface ResourceLoadedProviderProps {
  children: ReactNode;
}

type ResourceLoadedContextState
  = { resourceLoaded: boolean, setResourceLoaded: Dispatch<SetStateAction<boolean>> };
export const ResourceLoadedContext = createContext<ResourceLoadedContextState>(null);

/**
 * リソースがロードされたか？を管理
 * @param param0 
 * @returns 
 */
export const ResourceLoadedProvider: FC<ResourceLoadedProviderProps> = ({
  children
}) => {

  const [resourceLoaded, setResourceLoaded] = useState(false);

  return (
    <ResourceLoadedContext.Provider value={ { resourceLoaded, setResourceLoaded } }>
      { children }
    </ResourceLoadedContext.Provider>
  );
};
