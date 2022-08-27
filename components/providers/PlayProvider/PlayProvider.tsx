import React, { FC, createContext, ReactNode, Dispatch, useState, SetStateAction } from "react";

export interface PlayProviderProps {
  children: ReactNode;
}

type PlayProviderState
  = { play: boolean, setPlay: Dispatch<SetStateAction<boolean>> };
export const PlayContext = createContext<PlayProviderState>(null);

/**
 * 再生 / 停止の状態を管理
 * @param param0 
 * @returns 
 */
export const PlayProvider: FC<PlayProviderProps> = ({
  children
}) => {

  const [play, setPlay] = useState(false);

  return (
    <PlayContext.Provider value={ { play, setPlay } }>
      { children }
    </PlayContext.Provider>
  );
};
